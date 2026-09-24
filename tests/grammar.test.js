const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const read = (name) => JSON.parse(fs.readFileSync(path.join(root, name), 'utf8'));
const extension = read('package.json');
const grammar = read('syntaxes/stellaris_yaml_injection.json');
const keys = read('syntaxes/stellaris_yaml_injection_loc_with_scalar.json');

test('both localisation grammars are registered', () => {
  const registered = extension.contributes.grammars.map(({ scopeName }) => scopeName);
  assert.ok(registered.includes(grammar.scopeName));
  assert.ok(registered.includes(keys.scopeName));
});

test('color codes used by Stellaris 4.5.1 have rules and theme colors', () => {
  const included = grammar.repository['stellaris-color-codes'].patterns.map(({ include: name }) => name);
  for (const code of ['A', 'U', 't', '0', '1', '2']) {
    const pair = Object.entries(grammar.repository).find(([, rule]) => rule.begin === '§' + code);
    const [name, entry] = pair || [];
    assert.ok(entry, 'missing §' + code);
    assert.ok(included.includes('#' + name), 'rule for §' + code + ' is not active');
    assert.match('§' + code + 'Text§!', new RegExp(entry.begin + '.*' + entry.end));
    for (const theme of ['dark', 'night_owl', 'stellaris_theme']) {
      const colors = fs.readFileSync(path.join(root, 'themes', theme + '.json'), 'utf8');
      assert.ok(colors.includes('"scope": "' + entry.name + '"'), theme + ' lacks §' + code);
    }
  }
});

test('bracket commands, labelled concept links, and escaped brackets', () => {
  const scoped = new RegExp(grammar.repository['bracket-command'].match, 'g');
  const linked = new RegExp(grammar.repository['concept-link'].match, 'g');
  assert.deepEqual('[Root.GetName]'.match(scoped), ['[Root.GetName]']);
  assert.deepEqual('[Scope.my_variable]'.match(scoped), ['[Scope.my_variable]']);
  assert.deepEqual("['concept_pc_frozen', Frozen Worlds]".match(linked),
    ["['concept_pc_frozen', Frozen Worlds]"]);
  assert.deepEqual("['concept_seeded_planet_0_modifier' ]".match(linked),
    ["['concept_seeded_planet_0_modifier' ]"]);
  assert.deepEqual("['technology:tech_galactic_archivism', £society_research£$tech_galactic_archivism$]".match(linked),
    ["['technology:tech_galactic_archivism', £society_research£$tech_galactic_archivism$]"]);
  assert.equal('[[example]'.match(scoped), null);
  assert.equal('[[example]'.match(linked), null);
  assert.deepEqual('$@galactic_curators_curator_enclave_purchase_cost|%0$'.match(
    new RegExp(grammar.repository['loc-key'].match, 'g')),
    ['$@galactic_curators_curator_enclave_purchase_cost|%0$']);
  assert.deepEqual('£society_research£'.match(new RegExp(grammar.repository['icon-code'].match, 'g')),
    ['£society_research£']);
});

test('Stellaris versioned keys do not match normal YAML or comments', () => {
  const versioned = new RegExp(keys.patterns[0].match);
  assert.deepEqual(versioned.exec(' crisis.2010.desc:0 "Text"')?.slice(1, 4),
    ['crisis.2010.desc', ':', '0']);
  assert.equal(versioned.test('ordinary_yaml: value'), false);
  assert.equal(versioned.test('# crisis.2010.desc:0 "Text"'), false);
});
