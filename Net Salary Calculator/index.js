function calculateNetSalary(grossSalary) {
    const payeRate = 0.3; // assume 30% tax rate
    const nhifRate = 1200;
    const nssfRate = 0.05; // assume 5% tax rate
    const deductions = grossSalary * (payeRate + nhifRate + nssfRate);
    const netSalary = grossSalary - deductions;
    return netSalary;
  }
  
  // example usage
  const grossSalary = 50000;
  const netSalary = calculateNetSalary(grossSalary);
  console.log(`Net salary: $${netSalary}`);
  