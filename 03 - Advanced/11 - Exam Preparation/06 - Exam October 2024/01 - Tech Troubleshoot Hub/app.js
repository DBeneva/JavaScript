window.addEventListener('load', solution);

function solution() {
	const employeeInput = document.getElementById('employee');
	const categoryInput = document.getElementById('category');
	const urgencyInput = document.getElementById('urgency');
	const teamInput = document.getElementById('team');
	const descriptionInput = document.getElementById('description');
	const addBtn = document.getElementById('add-btn');
	const previewList = document.getElementsByClassName('preview-list')[0];
	const pendingList = document.getElementsByClassName('pending-list')[0];
	const resolvedList = document.getElementsByClassName('resolved-list')[0];
	

	addBtn.addEventListener('click', addItem);

	function addItem(e) {
		e.preventDefault();

		const employee = employeeInput.value;
		const category = categoryInput.value;
		const urgency = urgencyInput.value;
		const team = teamInput.value;
		const description = descriptionInput.value;

		if (employee === '' || category === '' || urgency === '' || team === '' || description === '') {
			return;
		}

		const editBtn = el('button',
			{ class: 'edit-btn', event: ['click', editHandler] },
			'Edit'
		);

		const continueBtn = el('button',
			{ class: 'continue-btn', event: ['click', continueHandler] },
			'Continue'
		);

		const item = el('li',
			{ class: 'problem-content' },
			el('article',
				el('p', `From: ${employee}`),
				el('p', `Category: ${category}`),
				el('p', `Urgency: ${urgency}`),
				el('p', `Assigned to: ${team}`),
				el('p', `Description: ${description}`)
			)
		);

		item.appendChild(editBtn);
		item.appendChild(continueBtn);

		previewList.appendChild(item);
		
		employeeInput.value = '';
		categoryInput.value = '';
		urgencyInput.value = '';
		teamInput.value = '';
		descriptionInput.value = '';
		addBtn.setAttribute('disabled', 'disabled');
		
		function editHandler() {
			employeeInput.value = employee;
			categoryInput.value = category;
			urgencyInput.value = urgency;
			teamInput.value = team;
			descriptionInput.value = description;
			addBtn.removeAttribute('disabled');

			previewList.removeChild(item);
		}
	
		function continueHandler() {
			item.removeChild(editBtn);
			item.removeChild(continueBtn);

			const resolveBtn = el('button',
				{ class: 'resolve-btn', event: ['click', resolveHandler] },
				'Resolved'
			);

			item.appendChild(resolveBtn);
			pendingList.appendChild(item);

			function resolveHandler() {
				item.removeChild(resolveBtn);
	
				const clearBtn = el('button',
					{ class: 'cancel-btn', event: ['click', clearHandler] },
					'Clear'
				);
	
				item.appendChild(clearBtn);
				resolvedList.appendChild(item);
			}
		}


		function clearHandler() {
			resolvedList.removeChild(item);
		}
	}

	function el(type, ...content) {
		let element = document.createElement(type);

		content.forEach(e => {
			if (typeof e == 'string' || typeof e == 'number') {
				let node = document.createTextNode(e);
				element.appendChild(node);
			} else if (e instanceof HTMLElement) {
				element.appendChild(e);
			} else if (typeof e == 'object') {
				Object.entries(e).forEach(([name, value]) => {
					if (name == 'event') {
						element.addEventListener(...value);
					} else {
						element.setAttribute(name, value);
					}
				});
			}
		});

		return element;
	}
}