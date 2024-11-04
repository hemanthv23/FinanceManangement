const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;
const DATABASE_USER = "hemanthshetty346";
const PASSWORD = "hemanthshetty23";
const DB_URL = `mongodb+srv://${DATABASE_USER}:${PASSWORD}@finman.dq3wl.mongodb.net/financeManagement?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/incomes", require("./routes/incomeRoutes"));
app.use("/api/expenses", require("./routes/expenseRoutes"));
app.use("/api/budgets", require("./routes/budgetRoutes"));

connectDB();
