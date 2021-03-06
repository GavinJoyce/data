import { runInDebug } from 'ember-data/-private/debug';
import { test, skip } from 'qunit';

export default function testInDebug() {
  let isDebug = false;

  runInDebug(function() {
    isDebug = true;
  });

  if (isDebug) {
    test(...arguments);
  } else {
    skip(...arguments);
  }
}
