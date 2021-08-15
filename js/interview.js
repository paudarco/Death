console.log(document.documentElement.clientHeight);

const questionBlock = document.querySelector('.question'),
      selects = questionBlock.querySelectorAll('.select'),
      button = questionBlock.querySelector('button');

selects.forEach((selectBlock, i, arr) => {
    function hideSelect(select) {
        select.querySelector('.select_styled').classList.remove('active');
        select.querySelector('.select_options').classList.remove('active');
    }

    function showSelect(select) {
        select.querySelector('.select_styled').classList.add('active');
        select.querySelector('.select_options').classList.add('active');
    }

    selectBlock.querySelector('.select_styled').addEventListener('click', (event) => {
        // console.log(+document.querySelector('.select_styled').textContent);
        if (!event.target.classList.contains('active')) {    
            showSelect(selectBlock);
            event.target.classList.remove('required');
        } else {
            hideSelect(selectBlock);
        }

        arr.forEach(selectItem => {
            if (selectItem.querySelector('.select_styled') !== event.target) {
                hideSelect(selectItem);
            }
        });
    });

    const selectList = selectBlock.querySelectorAll('li');

    selectList.forEach(selectItem => {
        selectItem.addEventListener('click', (event) => {
            selectBlock.querySelector('.select_styled').textContent = selectItem.textContent;
            hideSelect(selectBlock);
        });
    });
});

button.addEventListener('click', () => {
    selects.forEach(select => {
        if (isNaN(+select.querySelector('.select_styled').textContent)) {
            select.querySelector('.select_styled').classList.add('required');
        } else {
            // console.log('все норм');
        }
    });
});



