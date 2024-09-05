document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    const accordionContents = document.querySelectorAll('.accordion-content');

    dropdownBtn.addEventListener('click', () => {
        // 드롭다운 토글
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';

        // 모든 아코디언 내용을 닫음 (초기화)
        accordionContents.forEach(content => {
            content.style.display = 'none';
        });
    });

    const accordionButtons = document.querySelectorAll('.accordion-btn');

    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const accordionContent = button.nextElementSibling;
            const isActive = accordionContent.style.display === 'block';

            // 모든 아코디언 내용을 닫음
            accordionContents.forEach(content => {
                content.style.display = 'none';
            });

            // 클릭한 것만 열기
            if (!isActive) {
                accordionContent.style.display = 'block';

                // 자격증 클릭 시 화면을 해당 자격증 항목으로 스크롤되도록 설정
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
});
