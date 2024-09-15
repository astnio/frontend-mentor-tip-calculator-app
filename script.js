const tipForm = document.querySelector('#tip-form');

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
