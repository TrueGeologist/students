(() => {
    function createDiv (element, divClassName1, divClassName2, divTextContent) {
        console.log('function createDiv');

        element.className = `${divClassName1} ${divClassName2}`;
        element.textContent = divTextContent;
    }

    function createInput (element ,inputName, inputType, inputId, inputClassName1, inputClassName2, inputRequired, inputPattern, inputPlaceholder) {
        console.log('function createInput');

        element.name = inputName;
        element.type = inputType;
        element.id = inputId;
        element.className = `${inputClassName1} ${inputClassName2}`;
        element.required = inputRequired;
        element.pattern = inputPattern;
        element.placeholder = inputPlaceholder;
    }

    let now = new Date();
    const body = document.body;

    const container = document.createElement('div');
    container.classList.add('container');

    const h1 = document.createElement('h1');
    h1.classList.add('h1');
    h1.textContent = 'Панель управления студентами';

    const filterForm = document.createElement('form');
    filterForm.classList.add('filterForm');
    filterForm.setAttribute('novalidate', 'true');

    const filterFormRow = document.createElement('div');
    createDiv(filterFormRow, 'form-row', '', '');

    const filterFormRowContainer1 = document.createElement('div');
    createDiv(filterFormRowContainer1, 'col-md-3', 'mb-3', '');
    const filterFormRowContainer2 = document.createElement('div');
    createDiv(filterFormRowContainer2, 'col-md-3', 'mb-3', '');
    const filterFormRowContainer3 = document.createElement('div');
    createDiv(filterFormRowContainer3, 'col-md-3', 'mb-3', '');
    const filterFormRowContainer4 = document.createElement('div');
    createDiv(filterFormRowContainer4, 'col-md-3', 'mb-3', '');

    const fullNameFilterLabel = document.createElement('label');
    const startYearLearningFilterLabel = document.createElement('label');
    const endYearLearningFilterLabel = document.createElement('label');
    const departmentFilterLabel = document.createElement('label');

    fullNameFilterLabel.textContent = 'Фильтр по ФИО студента';
    startYearLearningFilterLabel.textContent = 'Фильтр по началу обучения';
    endYearLearningFilterLabel.textContent = 'Фильтр по окончанию обучения';
    departmentFilterLabel.textContent = 'Фильтр по факультету';

    const fullNameFilterInput = document.createElement('input');
    createInput(fullNameFilterInput, 'fullNameFilterInput', 'text', 'fullNameFilterInput', 'form-control', 'filterInput', '', '^[А-Яа-яЁё\\s]+$', 'Иванов');

    const startYearLearningFilterInput = document.createElement('input');
    createInput(startYearLearningFilterInput, 'startYearLearningFilterInput', 'text', 'startYearLearningFilterInput', 'form-control', 'filterInput', '', '', '2010');

    const endYearLearningFilterInput = document.createElement('input');
    createInput(endYearLearningFilterInput, 'endYearLearningFilterInput', 'text', 'endYearLearningFilterInput', 'form-control', 'filterInput', '', '', '2014');

    const departmentFilterInput = document.createElement('input');
    createInput(departmentFilterInput, 'departmentFilterInput', 'text', 'departmentFilterInput', 'form-control', 'filterInput', '', '^[А-Яа-яЁё\\s]+$', 'Экономический');
    
    const table = document.createElement('table');
    table.classList.add('table', 'table-bordered');

    const tHead = document.createElement('thead');
    tHead.classList.add('thead-dark');

    const tBody = document.createElement('tbody');
    tBody.classList.add('.table-hover');

    const tableRow = document.createElement('tr');

    const resetButton = document.createElement('button');
    resetButton.classList.add('btn', 'resetButton');
    resetButton.textContent = 'Сбросить все фильтры и сортировку';

    const studentForm = document.createElement('form');
    studentForm.classList.add('needs-validation', 'studentForm');
    studentForm.setAttribute('novalidate', 'true');
    studentForm.style = 'margin-bottom: 1rem;'

    const formRow = document.createElement('div');
    formRow.classList.add('form-row');

    const formRowContainer1 = document.createElement('div');
    createDiv(formRowContainer1, 'col-md-3', 'mb-3', '');
    const formRowContainer2 = document.createElement('div');
    createDiv(formRowContainer2, 'col-md-3', 'mb-3', '');
    const formRowContainer3 = document.createElement('div');
    createDiv(formRowContainer3, 'col-md-3', 'mb-3', '');
    const formRowContainer4 = document.createElement('div');
    createDiv(formRowContainer4, 'col-md-3', 'mb-3', '');
    const formRowContainer5 = document.createElement('div');
    createDiv(formRowContainer5, 'col-md-3', 'mb-3', '');
    const formRowContainer6 = document.createElement('div');
    createDiv(formRowContainer6, 'col-md-3', 'mb-3', '');

    const nameLabel = document.createElement('label');
    const surnameLabel = document.createElement('label');
    const secondNameLabel = document.createElement('label');
    const birthDayLabel = document.createElement('label');
    const startYearLearningLabel = document.createElement('label');
    const departmentLabel = document.createElement('label');

    nameLabel.textContent = 'Имя студента';
    surnameLabel.textContent = 'Фамилия студента';
    secondNameLabel.textContent = 'Отчество студента (при наличии)';
    birthDayLabel.textContent = 'Дата рождения';
    startYearLearningLabel.textContent = 'Год начала обучения';
    departmentLabel.textContent = 'Факультет';
    
    const nameInput = document.createElement('input');
    createInput(nameInput, 'name','text', 'validationTooltip01', 'form-control', '', 'required', '^[А-Яа-яЁё\\s]+$', 'Иван');
    
    const surnameInput = document.createElement('input');
    createInput(surnameInput, 'surname', 'text', 'validationTooltip02', 'form-control', '', 'required', '^[А-Яа-яЁё\\s]+$', 'Иванов');

    const secondNameInput = document.createElement('input');
    createInput(secondNameInput, 'secondName', 'text', 'validationTooltip03', 'form-control', '', '', '^[А-Яа-яЁё\\s]+$', 'Иванович');

    const birthDayInput = document.createElement('input');
    createInput(birthDayInput, 'birthDay', 'date', 'validationTooltip04', 'form-control', 'birthDayInput', 'required', '', '');
    birthDayInput.min = '1900-01-01';
    birthDayInput.max = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    const startYearLearningInput = document.createElement('input');
    createInput(startYearLearningInput, 'startYearLearning', 'number', 'validationTooltip05', 'form-control', '', 'required', '', '2010');
    startYearLearningInput.min = 2000;
    startYearLearningInput.max = now.getFullYear();

    const departmentInput = document.createElement('input');
    createInput(departmentInput, 'department', 'text', 'validationTooltip06', 'form-control', '', 'required', '^[А-Яа-яЁё\\s]+$', 'Экономический');

    const validationContainer1 = document.createElement('div');
    createDiv(validationContainer1, 'invalid-tooltip', '', 'Введите имя студента с большой буквы');
    const validationContainer2 = document.createElement('div');
    createDiv(validationContainer2, 'invalid-tooltip', '', 'Введите фамилию студента с большой буквы');
    const validationContainer3 = document.createElement('div');
    createDiv(validationContainer3, 'invalid-tooltip', '', 'Введите отчество студента с большой буквы');
    const validationContainer4 = document.createElement('div');
    createDiv(validationContainer4, 'invalid-tooltip', '', 'Введите дату рождения студента (не раньше 01.01.1900 и не позже сегодняшней даты)');
    const validationContainer5 = document.createElement('div');
    createDiv(validationContainer5, 'invalid-tooltip', '', `Введите год начала обучения студента (от 2000 до ${now.getFullYear()})`);
    const validationContainer6 = document.createElement('div');
    createDiv(validationContainer6, 'invalid-tooltip', '', 'Введите факультет студента');

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.classList.add('btn', 'btn-pripary');
    submitButton.textContent = 'Добавить студента';

    let studentsArr = [];
    let sortedStudentsArr = [];
    let j = 0;

    ( () => {
        console.log('function createTableHeading =>');
        const headingArray = ['№ п/п', 'ФИО студента', 'Дата рождения', 'Годы обучения', 'Факультет'];
        
        for (let i = 0; i < headingArray.length; i++) {
            const tableHeading = document.createElement('th');
            tableHeading.scope = 'col';
            tableHeading.id = i+1;
            tableHeading.className = 'tableHeading';
            tableHeading.textContent = headingArray[i];
            tableHeading.style = 'cursor: pointer;';
            tableRow.append(tableHeading);
        }
    }) ();

    function addNewStudent () {
        console.log('function addNewStudent');
        
        j++;

        let birthDayDate = new Date(birthDayInput.value.trim());

        let studentObj = {
            id: j,
            name: nameInput.value.trim(),
            surname: surnameInput.value.trim(),
            secondName: secondNameInput.value.trim(),
            birthDay: birthDayDate,
            startYearLearning: startYearLearningInput.value.trim(),
            department: departmentInput.value.trim()
        };
        console.log(studentObj);

        studentsArr.push(studentObj);
        console.log(studentsArr);

        sortedStudentsArr = studentsArr.slice();

        createNewTableRow();
    }

    function createNewTableRow (arr, l) {
        if (!arr || !l) {
            console.log('!arr || !l');
            arr = studentsArr;
            l = j;
        }
        console.log('function createNewTableRow');
        const tableRow = document.createElement('tr');
        const tableHeading = document.createElement('th');

        let birthDayDateForTable = `${arr[l-1].birthDay.getFullYear()}-${arr[l-1].birthDay.getMonth() + 1}-${arr[l-1].birthDay.getDate()}`;
        let startYearLearningNumber = Number(arr[l-1].startYearLearning);
        let yearsOfLiving = Math.floor((now - arr[l-1].birthDay) / (1000*60*60*24*365));
        
        let wordForYearsOfLiving = null;
        if (yearsOfLiving > 4 && yearsOfLiving < 21) {
            wordForYearsOfLiving = 'лет';
        } else if (yearsOfLiving.toString().endsWith(1)) {
            wordForYearsOfLiving = 'год';
        } else if (yearsOfLiving.toString().endsWith(2) ||
        yearsOfLiving.toString().endsWith(3) ||
        yearsOfLiving.toString().endsWith(4)) {
            wordForYearsOfLiving = 'года';
        } else {
            wordForYearsOfLiving = 'лет';
        }
        
        let yearsOfLearning = null;
        if (startYearLearningNumber + 4 < Number(now.getFullYear())) {
            yearsOfLearning = 'закончил';
        } else if (Number(now.getMonth()) > 9 && startYearLearningNumber + 4 === Number(now.getFullYear())) {
            console.log('Сентябрь прошел');
            yearsOfLearning = 'закончил';
        } else if (Number(now.getMonth()) > 9) {
            console.log('Не закончил + 1');
            yearsOfLearning = `${Number(now.getFullYear()) - startYearLearningNumber + 1} курс`;
        } else {
            console.log('Не закончил');
            yearsOfLearning = `${Number(now.getFullYear()) - startYearLearningNumber} курс`;
        }

        tableHeading.scope = 'row';
        tableHeading.textContent = arr[l-1].id;

        tBody.append(tableRow);
        tableRow.append(tableHeading);

        for (let k = 1; k < 5; k++) {
            const tableCell = document.createElement('td');

            if (k === 1) {
                tableCell.textContent = `${arr[l-1].surname} ${arr[l-1].name} ${arr[l-1].secondName}`;
            } else if (k === 2) {
                tableCell.textContent = `${birthDayDateForTable} (${yearsOfLiving} ${wordForYearsOfLiving})`;
            } else if (k === 3) {
                tableCell.textContent = `${startYearLearningNumber} - ${startYearLearningNumber + 4} (${yearsOfLearning})`;
            } else if (k === 4) {
                tableCell.textContent = arr[l-1].department;
            }

            tableRow.append(tableCell);
        }
    };

    function resetTable () {
        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }

        for (let k = 1; k !== studentsArr.length + 1; k++) {
            createNewTableRow(studentsArr, k);
        }
    }

    function sortTableById () {
        console.log('function sortTableById');

        sortedStudentsArr.sort((a, b) => a.id > b.id ? 1 : -1);

        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        for (let k = 1; k !== sortedStudentsArr.length + 1; k++) {
            createNewTableRow(sortedStudentsArr, k);
        }
    }

    function sortTableBySurname () {
        console.log('function sortTableBySurname');

        sortedStudentsArr.sort((a, b) => a.secondName.localeCompare(b.secondName));
        sortedStudentsArr.sort((a, b) => a.name.localeCompare(b.name));
        sortedStudentsArr.sort((a, b) => a.surname.localeCompare(b.surname));

        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        for (let k = 1; k !== sortedStudentsArr.length + 1; k++) {
            createNewTableRow(sortedStudentsArr, k);
        }
    }

    function sortTableByBirthDay () {
        console.log('function sortTableByBirthDay');

        sortedStudentsArr.sort((a, b) => a.birthDay < b.birthDay ? 1 : -1);

        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        for (let k = 1; k !== sortedStudentsArr.length + 1; k++) {
            createNewTableRow(sortedStudentsArr, k);
        }
    }

    function sortTableByStartYearLearning () {
        console.log('function sortTableByStartYearLearning');

        sortedStudentsArr.sort((a, b) => a.startYearLearning.localeCompare(b.startYearLearning));

        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        for (let k = 1; k !== sortedStudentsArr.length + 1; k++) {
            createNewTableRow(sortedStudentsArr, k);
        }
    }

    function sortTableByDepartment () {
        console.log('function sortTableByDepartment');

        sortedStudentsArr.sort((a, b) => a.department.localeCompare(b.department));

        while (tBody.firstChild) {
            tBody.removeChild(tBody.firstChild);
        }
        for (let k = 1; k !== sortedStudentsArr.length + 1; k++) {
            createNewTableRow(sortedStudentsArr, k);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        body.append(container);
        container.append(h1);
        container.append(filterForm);
        container.append(table);
        container.append(resetButton);
        container.append(studentForm);

        filterForm.append(filterFormRow);

        filterFormRow.append(filterFormRowContainer1);
        filterFormRow.append(filterFormRowContainer2);
        filterFormRow.append(filterFormRowContainer3);
        filterFormRow.append(filterFormRowContainer4);

        filterFormRowContainer1.append(fullNameFilterLabel);
        filterFormRowContainer1.append(fullNameFilterInput);

        filterFormRowContainer2.append(startYearLearningFilterLabel);
        filterFormRowContainer2.append(startYearLearningFilterInput);

        filterFormRowContainer3.append(endYearLearningFilterLabel);
        filterFormRowContainer3.append(endYearLearningFilterInput);
        
        filterFormRowContainer4.append(departmentFilterLabel);
        filterFormRowContainer4.append(departmentFilterInput);

        table.append(tHead);
        table.append(tBody);
        tHead.append(tableRow);

        studentForm.append(formRow);
        studentForm.append(submitButton);

        formRow.append(formRowContainer1);
        formRow.append(formRowContainer2);
        formRow.append(formRowContainer3);
        formRow.append(formRowContainer4);
        formRow.append(formRowContainer5);
        formRow.append(formRowContainer6);

        formRowContainer1.append(nameLabel);
        formRowContainer1.append(nameInput);
        formRowContainer1.append(validationContainer1);

        formRowContainer2.append(surnameLabel);
        formRowContainer2.append(surnameInput);
        formRowContainer2.append(validationContainer2);

        formRowContainer3.append(secondNameLabel);
        formRowContainer3.append(secondNameInput);
        formRowContainer3.append(validationContainer3);

        formRowContainer4.append(birthDayLabel);
        formRowContainer4.append(birthDayInput);
        formRowContainer4.append(validationContainer4);

        formRowContainer5.append(startYearLearningLabel);
        formRowContainer5.append(startYearLearningInput);
        formRowContainer5.append(validationContainer5);

        formRowContainer6.append(departmentLabel);
        formRowContainer6.append(departmentInput);
        formRowContainer6.append(validationContainer6);

        let forms = document.getElementsByClassName('needs-validation');

        let validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                if (form.checkValidity() === false) {
                    event.stopPropagation();
                } else {
                    addNewStudent();

                    // nameInput.value = '';
                    // surnameInput.value = '';
                    // secondNameInput.value = '';
                    // birthDayInput.value = '';
                    // startYearLearningInput.value = '';
                    // departmentInput.value = '';
                }

                form.classList.add('was-validated');
            }, false);
        });

        resetButton.addEventListener('click', resetTable);

        let idCol = document.getElementById('1');
        let surnameCol = document.getElementById('2');
        let birthDayCol = document.getElementById('3');
        let startLearningYearCol = document.getElementById('4');
        let departmentCol = document.getElementById('5');
        
        idCol.addEventListener('click', sortTableById);
        surnameCol.addEventListener('click', sortTableBySurname);
        birthDayCol.addEventListener('click', sortTableByBirthDay);
        startLearningYearCol.addEventListener('click', sortTableByStartYearLearning);
        departmentCol.addEventListener('click', sortTableByDepartment);

        let fullNameFilterInputId = document.getElementById('fullNameFilterInput');
        let startYearLearningFilterInputId = document.getElementById('startYearLearningFilterInput');
        let endYearLearningFilterInputId = document.getElementById('endYearLearningFilterInput');
        let departmentFilterInputId = document.getElementById('departmentFilterInput');

        fullNameFilterInputId.addEventListener('input', () => {
            console.log('function filterTableByFullName');
    
            let filteredStudentsArr = sortedStudentsArr.filter(arr => arr.name.toLowerCase().includes(fullNameFilterInputId.value.toLowerCase()) || arr.surname.toLowerCase().includes(fullNameFilterInputId.value.toLowerCase()) || arr.secondName.toLowerCase().includes(fullNameFilterInputId.value.toLowerCase()));
            console.log(filteredStudentsArr);

            while (tBody.firstChild) {
                tBody.removeChild(tBody.firstChild);
            }
            for (let k = 1; k !== filteredStudentsArr.length + 1; k++) {
                createNewTableRow(filteredStudentsArr, k);
            }
        });

        startYearLearningFilterInputId.addEventListener('input', () => {
            console.log('function filterTableByStartYearLearning');
    
            let filteredStudentsArr = sortedStudentsArr.filter(arr => arr.startYearLearning.includes(startYearLearningFilterInputId.value));
            console.log(filteredStudentsArr);

            while (tBody.firstChild) {
                tBody.removeChild(tBody.firstChild);
            }
            for (let k = 1; k !== filteredStudentsArr.length + 1; k++) {
                createNewTableRow(filteredStudentsArr, k);
            }
        });

        endYearLearningFilterInputId.addEventListener('input', () => {
            console.log('function filterTableByEndYearLearning');
    
            let filteredStudentsArr = sortedStudentsArr.filter(arr => arr.startYearLearning.includes(Number(endYearLearningFilterInputId.value) - 4));
            console.log(filteredStudentsArr);

            if (endYearLearningFilterInputId.value > 2000 && endYearLearningFilterInputId.value < now.getFullYear + 4) {
                while (tBody.firstChild) {
                    tBody.removeChild(tBody.firstChild);
                }
                for (let k = 1; k !== filteredStudentsArr.length + 1; k++) {
                    createNewTableRow(filteredStudentsArr, k);
                }
            }
        });

        departmentFilterInputId.addEventListener('input', () => {
            console.log('function filterTableByDepartment');
    
            let filteredStudentsArr = sortedStudentsArr.filter(arr => arr.department.toLowerCase().includes(departmentFilterInputId.value.toLowerCase()));
            console.log(filteredStudentsArr);

            while (tBody.firstChild) {
                tBody.removeChild(tBody.firstChild);
            }
            for (let k = 1; k !== filteredStudentsArr.length + 1; k++) {
                createNewTableRow(filteredStudentsArr, k);
            }
        });
    });
}) ();