let user = {
  name: "Mahesh",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

user.greet();

let age = 18;
if (age >= 18) {
  console.log("true");
} else {
  console.log("false");
}

let marks = 85;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 50) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

let result = age >= 18 ? "Eligible to vote" : "Not eligible to vote";
console.log(result);

let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week!");
    break;
  case "Friday":
    console.log("Weekend is coming!");
    break;
  case "Sunday":
    console.log("It's a holiday!");
    break;
  default:
    console.log("It's a regular day.");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  j++;
  console.log(j);
}

let count = 4;
do {
  console.log("count: " + count);
  count++;
} while (count <= 5);

let person = { name: "mahesh", age: 25, city: "Hyderabad" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

let numbers = [10, 20, 30, 40];
for (let num of numbers) {
  console.log(num);
}

for (i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

function myFunction(num) {
  if (num % 2 === 0) return "even";
  return "odd";
}
console.log(myFunction(10));

function validateName(username, password) {
  const user = [
    {
      username: "mahesh",
      password: "mahi123",
    },
    {
      username: "khasim",
      password: "kha234",
    },
    {
      username: "pavan",
      password: "pav456",
    },
    {
      username: "sadhik",
      password: "sad678",
    },
  ];
  for (let a of user) {
    if (a.username === username && a.password === password) {
      return "Login Successful";
    }
  }
  {
    return "Login Fail";
  }
}
console.log(validateName("mahesh", "mahi123"));
console.log(validateName("khasim", "kha234"));

function withdrawMoney(accountBalance, withdrawMoney) {
  if (withdrawMoney > accountBalance) {
    return "Insufficient Balance";
  } else if (withdrawMoney % 100 !== 0) {
    return "Enter amount in multiples of 100!";
  } else {
    return `Transaction Successful!Remaining Balance:₹${
      accountBalance - withdrawMoney
    }`;
  }
}
console.log(withdrawMoney(40000, 20000));

function calculateTotal(cartItems) {
  let total = 0;
  for (let key of cartItems) {
    total += key.price * key.quantity;
  }
  console.log(total);
  if (total >= 5000) {
    let discount = total * 0.1;
    console.log('Discount amount is":', discount);
    total = total - discount;
  } else if (total >= 2000) {
    let discount = total * 0.05;
    console.log("Discount amount is:", discount);
    total = total - discount;
  }
  return `Total payable after discount: ₹${total.toFixed(2)}`;
}
const cart = [
  { name: "Laptop", price: 3000, quantity: 1 },
  { name: "Mouse", price: 800, quantity: 1 },
  { name: "Keyboard", price: 200, quantity: 1 },
];
console.log(calculateTotal(cart));

function checkPasswordStrength(password) {
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[@#$%^&*!]/.test(password)) strength++;

  switch (strength) {
    case 5:
      return "Very Strong";
    case 4:
      return "Strong";
    case 3:
      return "Medium";
    case 2:
      return "Weak";
    default:
      return "Very Weak";
  }
}

console.log(checkPasswordStrength("Mahesh@123"));
console.log(checkPasswordStrength("mahesh123"));
console.log(checkPasswordStrength("Ma@1245"));

function getTicketPrice(age) {
  if (age < 5) {
    return "Free Ticket";
  } else if (age >= 5 && age <= 12) {
    return "Child Ticket: ₹100";
  } else if (age >= 13 && age <= 60) {
    return "Adult Ticket: ₹200";
  } else {
    return "Senior Citizen Ticket: ₹150";
  }
}

console.log(getTicketPrice(3));
console.log(getTicketPrice(10));
console.log(getTicketPrice(30));
console.log(getTicketPrice(65));

function autoSuggest(input) {
  const products = ["Laptop", "Phone", "Charger", "Camera", "Tablet", "Watch"];

  if (input.length < 3) {
    return "Keep typing...";
  }

  return products.filter((product) =>
    product.toLowerCase().includes(input.toLowerCase())
  );
}

console.log(autoSuggest("ph"));
console.log(autoSuggest("lap"));
console.log(autoSuggest("ch"));

async function fetchUserData(username) {
  let attempts = 0;
  let maxAttempts = 3;

  while (attempts < maxAttempts) {
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("API Error");

      let data = await response.json();
      return `User: ${data.login}, Followers: ${data.followers}`;
    } catch (error) {
      attempts++;
      console.log(`Attempt ${attempts}: Failed, Retrying...`);
    }
  }

  return "Failed to fetch data after multiple attempts.";
}

fetchUserData("maheshgatta").then(console.log).catch(console.error);
