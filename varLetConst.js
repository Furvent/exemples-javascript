"use strict";

var globalValue = "baaaaaad!!!";

const immutableValue = "Never Change";

const immutableReferenceToAList = [];
// Je peux faire
immutableReferenceToAList.push("Foo");
immutableReferenceToAList.push("Bar");

const immutableReferenceToAnObject = {};
// Je peux faire
immutableReferenceToAnObject.aProperty1 = 15;
immutableReferenceToAnObject.aProperty2 = "foo";
// Je ne peux pas faire :
// immutableReferenceToAnObject = {a: 1, b: 2};

let mutableValue = 8;
mutableValue = 12 // C'est OK
