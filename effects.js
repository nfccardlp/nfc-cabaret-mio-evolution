/* ========================================
   Club Luna - Mio Evolution
   インタラクティブエフェクト & オープニングアニメーション
   ======================================== */

document.addEventListener('DOMContentLoaded', function() {
    initOpeningAnimation();
    initInteractiveEffects();
});

/* ========================================
   オープニングアニメーション
   ======================================== */
function initOpeningAnimation() {
    const openingScreen = document.getElementById('opening-screen');
    if (!openingScreen) return;
    
    // オープニング用のスパークルを生成
    const sparklesContainer = openingScreen.querySelector('.opening-sparkles');
    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'opening-sparkle';
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        sparkle.style.animationDelay = `${Math.random() * 2}s`;
        sparkle.style.animationDuration = `${1.5 + Math.random()}s`;
        sparklesContainer.appendChild(sparkle);
    }
    
    // オープニング用の花びらを生成
    const petalsContainer = openingScreen.querySelector('.opening-petals');
    const petalSymbols = ['🌸', '💮', '🏵️', '✿'];
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'opening-petal';
        petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
        petal.style.left = `${Math.random() * 100}%`;
        petal.style.animationDelay = `${Math.random() * 2}s`;
        petal.style.animationDuration = `${3 + Math.random() * 2}s`;
        petalsContainer.appendChild(petal);
    }
    
    // 3秒後にオープニングをフェードアウト
    setTimeout(() => {
        openingScreen.classList.add('fade-out');
        
        // アニメーション完了後に要素を削除
        setTimeout(() => {
            openingScreen.remove();
            document.body.style.overflow = '';
        }, 800);
    }, 3000);
    
    // オープニング中はスクロール無効
    document.body.style.overflow = 'hidden';
}

/* ========================================
   インタラクティブエフェクト
   タップ/クリックで星きらめき、花びらひらひら
   ======================================== */
function initInteractiveEffects() {
    // エフェクト用コンテナを作成
    const effectsContainer = document.createElement('div');
    effectsContainer.id = 'interactive-effects';
    effectsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(effectsContainer);
    
    // エフェクトのタイプ（ランダムで切り替え）
    const effectTypes = ['stars', 'petals', 'hearts', 'sparkles'];
    let currentEffectIndex = 0;
    
    // タップ/クリックイベント
    document.addEventListener('click', (e) => {
        // モーダルやライトボックスの閉じるボタン等は除外
        if (e.target.closest('.modal-close') || e.target.closest('.lightbox-close')) {
            return;
        }
        
        const x = e.clientX;
        const y = e.clientY;
        
        // 現在のエフェクトタイプを取得
        const effectType = effectTypes[currentEffectIndex];
        
        // エフェクトを生成
        createEffect(effectsContainer, x, y, effectType);
        
        // 次のクリックで別のエフェクト
        currentEffectIndex = (currentEffectIndex + 1) % effectTypes.length;
    });
    
    // タッチイベント（モバイル用）
    document.addEventListener('touchstart', (e) => {
        if (e.target.closest('.modal-close') || e.target.closest('.lightbox-close')) {
            return;
        }
        
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;
        
        const effectType = effectTypes[currentEffectIndex];
        createEffect(effectsContainer, x, y, effectType);
        currentEffectIndex = (currentEffectIndex + 1) % effectTypes.length;
    }, { passive: true });
    
    // ボタンホバー時（PC）の特別エフェクト
    const buttons = document.querySelectorAll('.cta-btn, .avatar-btn, .instagram-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', (e) => {
            createButtonGlowEffect(btn);
        });
    });
}

/* ========================================
   エフェクト生成関数
   ======================================== */
function createEffect(container, x, y, type) {
    const particleCount = 8 + Math.floor(Math.random() * 5);
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `effect-particle effect-${type}`;
        
        // ランダムな方向に飛ばす
        const angle = (Math.PI * 2 * i) / particleCount + Math.random() * 0.5;
        const velocity = 50 + Math.random() * 80;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            --tx: ${tx}px;
            --ty: ${ty}px;
        `;
        
        // タイプ別のコンテンツ
        switch(type) {
            case 'stars':
                particle.innerHTML = getRandomStar();
                break;
            case 'petals':
                particle.innerHTML = getRandomPetal();
                break;
            case 'hearts':
                particle.innerHTML = getRandomHeart();
                break;
            case 'sparkles':
                particle.innerHTML = getRandomSparkle();
                break;
        }
        
        container.appendChild(particle);
        
        // アニメーション完了後に削除
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

function getRandomStar() {
    const stars = ['⭐', '✨', '🌟', '💫', '⋆'];
    return stars[Math.floor(Math.random() * stars.length)];
}

function getRandomPetal() {
    const petals = ['🌸', '🏵️', '💮', '✿', '❀', '🌷'];
    return petals[Math.floor(Math.random() * petals.length)];
}

function getRandomHeart() {
    const hearts = ['💕', '💗', '💖', '💝', '♡', '♥'];
    return hearts[Math.floor(Math.random() * hearts.length)];
}

function getRandomSparkle() {
    const sparkles = ['✧', '✦', '❋', '❊', '✵', '✯'];
    return sparkles[Math.floor(Math.random() * sparkles.length)];
}

/* ========================================
   ボタンホバー時のグローエフェクト
   ======================================== */
function createButtonGlowEffect(btn) {
    const rect = btn.getBoundingClientRect();
    const container = document.getElementById('interactive-effects');
    
    // ボタン周りに小さなキラキラを生成
    for (let i = 0; i < 5; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'btn-hover-sparkle';
        
        const x = rect.left + Math.random() * rect.width;
        const y = rect.top + Math.random() * rect.height;
        
        sparkle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            font-size: ${12 + Math.random() * 10}px;
        `;
        sparkle.innerHTML = getRandomSparkle();
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 600);
    }
}
