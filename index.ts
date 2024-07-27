import inquirer from "inquirer";

console.log("Welcome to ATM Machine!\n");

let myBalance = 10000;
let myPin = 1234;

const pinEntered = await inquirer.prompt([
  {
    name: "pinCode",
    type: "number",
    message: "Enter your pin code",
  },
]);

if (pinEntered.pinCode === myPin) {
  console.log("Correct pin code!");

  const atmQuestion = await inquirer.prompt([
    {
      name: "AccountType",
      type: "list",
      message: "Please select your account type",
      choices: ["Current Account", "Saving Account"],
    },
    {
      name: "transMethod",
      type: "list",
      message: "Select your transaction method",
      choices: ["Cash Withdrawl", "Fast Cash"],
    },
  ]);
  if (atmQuestion.transMethod === "Cash Withdrawl") {
    let cashWithdrawlAmount = await inquirer.prompt([
      {
        name: "withdrawlAmountt",
        type: "number",
        message: "Enter the amount you want to withdraw.",
      },
    ]);

    if (myBalance >= cashWithdrawlAmount.withdrawlAmountt) {
      myBalance -= cashWithdrawlAmount.withdrawlAmountt;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log("Insufficient balance");
    }
  }

  if (atmQuestion.transMethod === "Fast Cash") {
    let fashCashAmount = await inquirer.prompt([
      {
        name: "fastCash",
        type: "list",
        message: "Select the amount you want to withdraw.",
        choices: [1000, 3000, 5000, 8000],
      },
    ]);
    if (myBalance >= fashCashAmount.fastCash) {
      myBalance -= fashCashAmount.fastCash;
      console.log(`Your remaining balance is: ${myBalance}`);
    } else {
      console.log("Insufficient balance");
    }
  }
 } else console.log("Icorrect pin code!");
