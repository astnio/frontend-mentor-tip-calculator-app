const tipForm = document.querySelector('#tip-form');

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

const btnReset = document.getElementById('btn-reset');

function resetCustomInputStyle() {
	customTipInput.value = '';
	customTipInput.classList.remove('has-value');
}

function resetAllInput() {
	resetCustomInputStyle();

	tipValueRadioInputs.forEach((rdoBtn) => {
		rdoBtn.checked = false;
	});
}

customTipInput.addEventListener('input', () => {
	if (customTipInput.value) {
		customTipInput.classList.add('has-value');
	} else {
		customTipInput.classList.remove('has-value');
	}
});

customTipInput.addEventListener('click', () => {
	tipValueRadioInputs.forEach((rdoBtn) => {
		rdoBtn.checked = false;
	});
});

numberOfPeopleInput.addEventListener('input', () => {
	if (numberOfPeopleInput.value >= 1) {
		numberOfPeopleInput.classList.remove('input-error');
		numberOfPeopleInputErrorLabel.style.display = 'none';
	} else {
		numberOfPeopleInput.classList.add('input-error');
		numberOfPeopleInputErrorLabel.style.display = 'block';
	}
});

btnReset.addEventListener('click', resetAllInput);

tipValueRadioInputs.forEach((rdoBtn) => {
	rdoBtn.addEventListener('click', resetCustomInputStyle);
});
