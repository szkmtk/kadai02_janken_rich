document.addEventListener('DOMContentLoaded', function() {
    const bloodTypes = ['A', 'B', 'O', 'AB'];
    const compatibilityResults = {
        'A': {
            'A': '似たもの同士で安定と理解を深められる関係',
            'B': '互いの違いを受け入れ、新しい発見が多い関係',
            'O': '互いの長所を生かし合い、支え合う強い絆がある関係',
            'AB': '理解と柔軟性が鍵となる、互いに成長できる関係'
        },
        'B': {
            'A': '異なる価値観から互いに学び合い、豊かな関係を築く',
            'B': '自由と情熱を共有し、エネルギッシュな関係',
            'O': '活動的で楽観的、お互いを明るく照らし合う関係',
            'AB': '創造性と柔軟性が合わさった、刺激的な関係'
        },
        'O': {
            'A': '実用的で安定した基盤の上に築かれる信頼関係',
            'B': 'お互いの自由を尊重し合い、楽しい冒険が待っている関係',
            'O': '単純明快、お互いがリラックスできる居心地の良さがある関係',
            'AB': 'お互いの違いをバランス良く補い合う、和やかな関係'
        },
        'AB': {
            'A': 'お互いの独立性を尊重しつつ、深い理解に基づく関係',
            'B': '相互の自由と個性が融合し、ユニークな関係を築く',
            'O': '互いの違いを楽しむことができる、柔軟で開放的な関係',
            'AB': '高い理解力と受容力を持ち、互いの独自性を尊重する関係'
        }
    };

    function getRandomBloodType() {
        const randomIndex = Math.floor(Math.random() * bloodTypes.length);
        return bloodTypes[randomIndex];
    }

    function showCompatibility(playerBloodType) {
        const computerBloodType = getRandomBloodType();
        document.getElementById('pc_hands').textContent = `コンピュータ：${computerBloodType}`;
        const result = compatibilityResults[playerBloodType][computerBloodType];
        document.getElementById('judgment').textContent = result;
    }

    document.getElementById('a_btn').addEventListener('click', function() { showCompatibility('A'); });
    document.getElementById('b_btn').addEventListener('click', function() { showCompatibility('B'); });
    document.getElementById('o_btn').addEventListener('click', function() { showCompatibility('O'); });
    document.getElementById('ab_btn').addEventListener('click', function() { showCompatibility('AB'); });
});
