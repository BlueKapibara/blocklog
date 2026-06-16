console.log("Working");
console.log("generator:", Blockly.JavaScript);
document.getElementById("proglandis").src =
  "../../multimedia/ikony/pythonicon.png";

Blockly.Blocks["start"] = {
  init: function () {
    this.appendDummyInput().appendField("START");

    this.setNextStatement(true, null);

    this.setColour(120);
  },
};

/* ===========================
   PRINT
   =========================== */

Blockly.Blocks['print'] = {
  init: function () {
    this.appendValueInput("TEXT")
      .appendField("print");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(210);
  }
};

Blockly.JavaScript.forBlock['print'] = function (block) {

  const text =
    Blockly.JavaScript.valueToCode(
      block,
      'TEXT',
      Blockly.JavaScript.ORDER_NONE
    ) || '""';

  return `console.log(${text});\n`;
};

/* ===========================
   TEKST
   =========================== */

Blockly.Blocks['text'] = {
  init: function () {

    this.appendDummyInput()
      .appendField('"')
      .appendField(
        new Blockly.FieldTextInput("tekst"),
        "TEXT"
      )
      .appendField('"');

    this.setOutput(true);
    this.setColour(160);
  }
};

Blockly.JavaScript.forBlock['text'] = function (block) {

  const text =
    block.getFieldValue("TEXT");

  return [
    `"${text}"`,
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

/* ===========================
   LICZBA
   =========================== */

Blockly.Blocks['number'] = {
  init: function () {

    this.appendDummyInput()
      .appendField(
        new Blockly.FieldNumber(0),
        "NUM"
      );

    this.setOutput(true);
    this.setColour(230);
  }
};

Blockly.JavaScript.forBlock['number'] = function (block) {

  return [
    block.getFieldValue("NUM"),
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

/* ===========================
   POBIERZ ZMIENNĄ
   =========================== */

Blockly.Blocks['get_var'] = {
  init: function () {

    this.appendDummyInput()
      .appendField(
        new Blockly.FieldVariable("x"),
        "VAR"
      );

    this.setOutput(true);
    this.setColour(330);
  }
};

Blockly.JavaScript.forBlock['get_var'] = function (block) {

  return [
    block.getFieldValue("VAR"),
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

/* ===========================
   USTAW ZMIENNĄ
   =========================== */

Blockly.Blocks['set_var'] = {
  init: function () {

    this.appendValueInput("VALUE")
      .appendField("ustaw")
      .appendField(
        new Blockly.FieldVariable("x"),
        "VAR"
      )
      .appendField("=");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.appendDummyInput()
  }
};

Blockly.JavaScript.forBlock['set_var'] = function (block) {

  const variable =
    block.getFieldValue("VAR");

  const value =
    Blockly.JavaScript.valueToCode(
      block,
      'VALUE',
      Blockly.JavaScript.ORDER_NONE
    ) || '0';

  return `let ${variable} = ${value};\n`;
};


/* ===========================
   DODAWANIE
   =========================== */

Blockly.Blocks['add'] = {
  init: function() {

    this.appendDummyInput()
      .appendField(
        new Blockly.FieldNumber(1),
        "VAR"
      )
      .appendField("+")
      .appendField(
        new Blockly.FieldNumber(3),
        "NUM"
      );

    this.setOutput(true);
    this.setColour(110);
  }
};
Blockly.JavaScript.forBlock['add'] = function (block) {

  const a =
    Blockly.JavaScript.valueToCode(
      block,
      'A',
      Blockly.JavaScript.ORDER_ADDITION
    ) || '0';

  const b =
    Blockly.JavaScript.valueToCode(
      block,
      'B',
      Blockly.JavaScript.ORDER_ADDITION
    ) || '0';

  return [
    `${a} + ${b}`,
    Blockly.JavaScript.ORDER_ADDITION
  ];
};

/* ===========================
   ODEJMOWANIE
   =========================== */

Blockly.Blocks['subtract'] = {
  init: function () {

    this.appendValueInput("A");

    this.appendValueInput("B")
      .appendField("-");

    this.setOutput(true);
    this.setColour(230);
  }
};

Blockly.JavaScript.forBlock['subtract'] = function (block) {

  const a =
    Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';

  const b =
    Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_SUBTRACTION) || '0';

  return [
    `${a} - ${b}`,
    Blockly.JavaScript.ORDER_SUBTRACTION
  ];
};

/* ===========================
   MNOŻENIE
   =========================== */

Blockly.Blocks['multiply'] = {
  init: function () {

    this.appendValueInput("A");

    this.appendValueInput("B")
      .appendField("*");

    this.setOutput(true);
    this.setColour(230);
  }
};

Blockly.JavaScript.forBlock['multiply'] = function (block) {

  const a =
    Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';

  const b =
    Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_MULTIPLICATION) || '0';

  return [
    `${a} * ${b}`,
    Blockly.JavaScript.ORDER_MULTIPLICATION
  ];
};

/* ===========================
   TRUE/FALSE
   =========================== */

Blockly.Blocks['boolean'] = {
  init: function () {

    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["true", "true"],
          ["false", "false"]
        ]),
        "BOOL"
      );

    this.setOutput(true);
    this.setColour(120);
  }
};

Blockly.JavaScript.forBlock['boolean'] = function (block) {

  return [
    block.getFieldValue("BOOL"),
    Blockly.JavaScript.ORDER_ATOMIC
  ];
};

/* ===========================
   RÓWNE ==
   =========================== */

Blockly.Blocks['equals'] = {
  init: function () {

    this.appendValueInput("A");

    this.appendValueInput("B")
      .appendField("==");

    this.setOutput(true);
    this.setColour(120);
  }
};

Blockly.JavaScript.forBlock['equals'] = function (block) {

  const a =
    Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_EQUALITY) || '0';

  const b =
    Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_EQUALITY) || '0';

  return [
    `${a} == ${b}`,
    Blockly.JavaScript.ORDER_EQUALITY
  ];
};

/* ===========================
   IF
   =========================== */

Blockly.Blocks['if'] = {
  init: function () {

    this.appendValueInput("COND")
      .appendField("jeżeli");

    this.appendStatementInput("DO")
      .appendField("to");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(120);
  }
};

Blockly.JavaScript.forBlock['if'] = function (block) {

  const cond =
    Blockly.JavaScript.valueToCode(
      block,
      'COND',
      Blockly.JavaScript.ORDER_NONE
    ) || 'false';

  const statements =
    Blockly.JavaScript.statementToCode(
      block,
      'DO'
    );

  return `if (${cond}) {\n${statements}}\n`;
};

/* ===========================
   WHILE
   =========================== */

Blockly.Blocks['while'] = {
  init: function () {

    this.appendValueInput("COND")
      .appendField("dopóki");

    this.appendStatementInput("DO")
      .appendField("wykonuj");

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
  }
};

Blockly.JavaScript.forBlock['while'] = function (block) {

  const cond =
    Blockly.JavaScript.valueToCode(
      block,
      'COND',
      Blockly.JavaScript.ORDER_NONE
    ) || 'false';

  const statements =
    Blockly.JavaScript.statementToCode(
      block,
      'DO'
    );

  return `while (${cond}) {\n${statements}}\n`;
};

const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox"),
});
