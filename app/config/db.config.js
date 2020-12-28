module.exports = {
  HOST: "",
  DATABASE_URL: "postgres://rynyjlceuboyed:a7b562de5e1c65cc845278ec1a5cb0a16c75a2d700863d3e47a97d0d4a029510@ec2-52-20-66-171.compute-1.amazonaws.com:5432/dfbu6q4nj2uhf3",
  USER: "postgres",
  PASSWORD: "password",
  DB: "postgres",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};