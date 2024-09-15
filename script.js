const tipForm = document.querySelector('#tip-form');

const tipValueRadioInputs = document.querySelectorAll(
	'.frm-tip-choice-input-rdo'
);
const customTipInputContainer = document.querySelector(
	'.frm-tip-choice-custom-input-container'
);
const customTipLabel = customTipInputContainer.querySelector('label');
const customTipInput = customTipInputContainer.querySelector('input');

customTipInput.addEventListener('input', () => {
	if (customTipInput.value) {
		customTipLabel.style.display = 'none';
		customTipInput.classList.add('has-value');
	} else {
		customTipLabel.style.display = 'block';
		customTipInput.classList.remove('has-value');
	}
});

customTipInput.addEventListener('click', () => {
	tipValueRadioInputs.forEach((rdoBtn) => {
		rdoBtn.checked = false;
	});
});

tipValueRadioInputs.forEach((rdoBtn) => {
	rdoBtn.addEventListener('click', resetCustomInputStyle);
});

function resetCustomInputStyle() {
	customTipInput.value = '';
	customTipInput.classList.remove('has-value');
	customTipLabel.style.display = 'block';
}
