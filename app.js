// https://calculator.swiftutors.com/operating-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const operatingRatioRadio = document.getElementById('operatingRatioRadio');
const operatingExpenseRadio = document.getElementById('operatingExpenseRadio');
const netSalesRadio = document.getElementById('netSalesRadio');

let operatingRatio;
let operatingExpense = v1;
let netSales = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

operatingRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Depreciation Rate';
  variable2.textContent = 'Book Value of Asset';
  operatingExpense = v1;
  netSales = v2;
  result.textContent = '';
});

operatingExpenseRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Ratio';
  variable2.textContent = 'Book Value of Asset';
  operatingRatio = v1;
  netSales = v2;
  result.textContent = '';
});

netSalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Operating Ratio';
  variable2.textContent = 'Depreciation Rate';
  operatingRatio = v1;
  operatingExpense = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(operatingRatioRadio.checked)
    result.textContent = `Operating Ratio = ${computeOperatingRatio().toFixed(2)} %`;

  else if(operatingExpenseRadio.checked)
    result.textContent = `Depreciation Rate = ${computeDepreciationRate().toFixed(2)}`;

  else if(netSalesRadio.checked)
    result.textContent = `Book Value of Asset = ${computeBookValueofAsset().toFixed(2)}`;
})

// calculation

function computeOperatingRatio() {
  return (Number(operatingExpense.value) / Number(netSales.value)) * 100;
}

function computeDepreciationRate() {
  return (Number(operatingRatio.value) / 100) * Number(netSales.value);
}

function computeBookValueofAsset() {
  return Number(operatingExpense.value) / (Number(operatingRatio.value) / 100);
}