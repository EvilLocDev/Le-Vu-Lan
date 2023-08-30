document.addEventListener('DOMContentLoaded', function () {
  const submitBtn = document.getElementById('submitBtn');
  const result = document.getElementById('result');
  const resultText = document.getElementById('resultText');

  submitBtn.addEventListener('click', function () {
    const nameInput = document.getElementById('nameInput').value;
    const questionSelect = document.getElementById('questionSelect');
    const selectedOption = questionSelect.options[questionSelect.selectedIndex];
    const selectedValue = selectedOption.value;

    // Simulate the Python logic here to generate the fortune result
    const fortuneResult = generateFortuneResult(nameInput, selectedValue);

    resultText.textContent = fortuneResult;
    result.classList.remove('hidden');
  });
});

function generateFortuneResult(name, selectedValue) {
  // Simulate generating a positive fortune result
  const positiveFortunes = [
    'Mọi điều tốt lành sẽ đến với bạn!',
    'Bạn sẽ thành công trong lĩnh vực của bạn đấy, Logistician!',
    'Hạnh phúc đang đợi bạn ở phía trước đấy! Vui chưa kìa!',
    'May mắn và thành công sẽ theo đuổi bạn trong mọi lĩnh vực! Ngưỡng mộ quá!',
    'Cuộc sống sẽ mang đến cho bạn những trải nghiệm tuyệt vời - Đi du lịch nè, được mọi người yêu mến nè và vô vàn điều khác!'
  ];

  return positiveFortunes[Math.floor(Math.random() * positiveFortunes.length)];
}
