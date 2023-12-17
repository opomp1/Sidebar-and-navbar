document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const deleteModalBtn = document.querySelector('.delete-modal-btn');
    const modal = document.querySelector('.modal');

    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    deleteModalBtn.addEventListener('click', function () {
        // Add delete function here
        modal.style.display = 'none';
    });
});