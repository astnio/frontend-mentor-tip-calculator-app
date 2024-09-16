// *** Inputs *** //

const billInput = document.getElementById('bill-amount');

const tipValueRadioInputs = document.querySelectorAll(
	'.frm-tip-choice-input-rdo'
);
const customTipInputContainer = document.querySelector(
	'.frm-tip-choice-custom-input-container'
);
const customTipLabel = customTipInputContainer.querySelector('label');
const customTipInput = customTipInputContainer.querySelector('input');

const numberOfPeopleInput = document.getElementById('people-amount');
const numberOfPeopleInputErrorLabel = document.querySelector(
	'.people-amount-error-message'
);

// *** Output *** //

const outputTotalTipPerPerson = document.getElementById('total-tip-per-person');
const outputTotalCostPerPerson = document.getElementById(
	'total-cost-per-person'
);

// *** Global Variables *** //

const btnReset = document.getElementById('btn-reset');

// *** Functions *** //

function resetCustomInputStyle() {
	customTipInput.value = '';
	customTipInput.classList.remove('has-value');
}

function resetAllInput() {
	resetCustomInputStyle();

	tipValueRadioInputs.forEach((rdoBtn) => {
		rdoBtn.checked = false;
	});
	customTipInput.value = '';
	numberOfPeopleInput.value = '';
	billInput.value = '';
	updateOutputs();
	btnReset.disabled = true;
}

function getTipAmount(bill, tipPerceant, numPeople) {
	return (bill * tipPerceant) / Number(numPeople);
}

function getTotal(bill, tipPerceant, numPeople) {
	const tip = Number(bill) * Number(tipPerceant);
	const billPlusTip = Number(bill) + Number(tip);
	return Number(billPlusTip) / Number(numPeople);
}

function getTipPerceant() {
	let finalValue = 0;

	if (!customTipInput.value) {
		tipValueRadioInputs.forEach((rdoBtn) => {
			if (rdoBtn.checked) {
				finalValue = rdoBtn.value;
			}
		});
	} else if (customTipInput.value) {
		finalValue = customTipInput.value / 100;
	}

	return finalValue;
}

function updateOutputs() {
	let bill = billInput.value ? billInput.value : 0;
	let tip = getTipPerceant();
	let people = numberOfPeopleInput.value ? numberOfPeopleInput.value : 1;

	const total = parseFloat(
		getTotal(Number(bill), Number(tip), Number(people))
	).toFixed(2);

	const tipTotal = parseFloat(
		getTipAmount(Number(bill), Number(tip), Number(people))
	).toFixed(2);

	outputTotalTipPerPerson.innerText = `$${tipTotal}`;
	outputTotalCostPerPerson.innerText = `$${total}`;

	btnReset.disabled = false;
}

// *** Event Listeners *** //

billInput.addEventListener('input', () => {
	updateOutputs();
});

billInput.addEventListener('blur', () => {
	billInput.value = parseFloat(billInput.value).toFixed(2);
});

btnReset.addEventListener('click', resetAllInput);

customTipInput.addEventListener('input', () => {
	if (customTipInput.value) {
		customTipInput.classList.add('has-value');
	} else {
		customTipInput.classList.remove('has-value');
	}
	updateOutputs();
});

numberOfPeopleInput.addEventListener('input', () => {
	if (numberOfPeopleInput.value >= 1) {
		numberOfPeopleInput.classList.remove('input-error');
		numberOfPeopleInputErrorLabel.style.display = 'none';
	} else {
		numberOfPeopleInput.classList.add('input-error');
		numberOfPeopleInputErrorLabel.style.display = 'block';
	}
	updateOutputs();
});

// *** Iterable Event Listeners *** //

customTipInput.addEventListener('click', () => {
	tipValueRadioInputs.forEach((rdoBtn) => {
		rdoBtn.checked = false;
	});
});

tipValueRadioInputs.forEach((rdoBtn) => {
	rdoBtn.addEventListener('click', () => {
		resetCustomInputStyle();
		updateOutputs();
	});
});
