const categorias = [
    {
        id: 1,
        nome: "Brigadeiros",
        emoji: "🍫",
        produtos: [
            { id: 1, nome: "Brigadeiro Tradicional", descricao: "Ao leite - clássico e delicioso", preco: 4.50 },
            { id: 2, nome: "Brigadeiro Leite Ninho", descricao: "Cremoso e suave", preco: 5.00 },
            { id: 3, nome: "Brigadeiro Leite Ninho com Nutella", descricao: "Combinação irresistível", preco: 5.50 },
            { id: 4, nome: "Brigadeiro Paçoca", descricao: "Sabor doce e tostado", preco: 5.00 },
            { id: 5, nome: "Brigadeiro Ferrero", descricao: "Sofisticado e premium", preco: 6.00 },
            { id: 6, nome: "Brigadeiro Caramelo Salgado", descricao: "Doce e salgado perfeito", preco: 5.50 },
            { id: 7, nome: "Brigadeiro Morango", descricao: "Fresco e frutuoso", preco: 5.00 },
            { id: 8, nome: "Beijinho", descricao: "Tradicional à moda da vó", preco: 4.50 },
            { id: 9, nome: "Brigadeiro Uva", descricao: "Sabor único e sofisticado", preco: 5.00 },
            { id: 10, nome: "Brigadeiro Maracujá", descricao: "Tropical e refrescante", preco: 5.00 },
            { id: 11, nome: "Brigadeiro Limão", descricao: "Cítrico e delicado", preco: 5.00 },
            { id: 12, nome: "Casadinho", descricao: "Dois sabores em um - sempre duplo", preco: 8.00 }
        ]
    },
    {
        id: 2,
        nome: "No Pote",
        emoji: "🥣",
        produtos: [
            { id: 13, nome: "Bombom Morango", descricao: "Delicado e aromático", preco: 12.00 },
            { id: 14, nome: "Bombom Uva", descricao: "Sofisticado e encantador", preco: 12.00 },
            { id: 15, nome: "Merengue", descricao: "Aéreo e crocante", preco: 13.00 },
            { id: 16, nome: "Torta de Limão", descricao: "Cítrica e irresistível", preco: 14.00 },
            { id: 17, nome: "Marido Gelado", descricao: "Frio e refrescante", preco: 12.00 },
            { id: 18, nome: "Bolo de Ninho com Nutella", descricao: "Macio e cremoso", preco: 14.00 },
            { id: 19, nome: "Bolo de Morango e Ninho", descricao: "Frutuoso e delicado", preco: 14.00 },
            { id: 20, nome: "Bolo Maracujá com Chocolate", descricao: "Contraste perfeito", preco: 15.00 },
            { id: 21, nome: "Bolo de Chocolate", descricao: "Clássico impecável", preco: 13.00 }
        ]
    },
    {
        id: 3,
        nome: "Brownie",
        emoji: "🍫",
        produtos: [
            { id: 22, nome: "Brownie Ninho com Nutella", descricao: "Fudgy e indulgente", preco: 11.00 },
            { id: 23, nome: "Brownie Brigadeiro", descricao: "Dupla felicidade", preco: 11.00 },
            { id: 24, nome: "Brownie Ninho", descricao: "Macio e fudgy", preco: 10.00 }
        ]
    },
    {
        id: 4,
        nome: "Copo da Felicidade",
        emoji: "🎉",
        produtos: [
            { id: 25, nome: "Ninho Duplo com Morango", descricao: "Combinação leve e frutuosa", preco: 16.00 },
            { id: 26, nome: "Especial de Morango", descricao: "O melhor dos 4 mundos", preco: 18.00 },
            { id: 27, nome: "Ferrero Rocher", descricao: "Premium e sofisticado", preco: 17.00 }
        ]
    }
];

// ============================================
// CARRINHO
// ============================================
let carrinho = [];

try {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
} catch (e) {
    carrinho = [];
}

// ============================================
// FUNÇÃO PRINCIPAL DE RENDERIZAÇÃO
// ============================================

function renderizarCategorias() {
    console.log("🚀 INICIANDO RENDERIZAÇÃO...");
    
    const container = document.getElementById('categorias-container');
    
    if (!container) {
        console.error("❌ ERRO: Container 'categorias-container' não encontrado!");
        return;
    }
    
    console.log("✅ Container encontrado!");
    
    let html = '';
    
    categorias.forEach((categoria, idx) => {
        console.log(`📦 Renderizando categoria ${idx + 1}: ${categoria.nome}`);
        
        html += `
            <div class="categoria-section">
                <h3 class="font-poppins text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span class="text-4xl">${categoria.emoji}</span> ${categoria.nome}
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    ${categoria.produtos.map(produto => {
                        return `
                            <div class="product-card">
                                <div class="product-image" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); height: 200px; display: flex; align-items: center; justify-content: center; color: white; font-size: 48px; border-radius: 8px 8px 0 0; overflow: hidden;">
                                    ${categoria.emoji}
                                </div>
                                <div class="product-info">
                                    <h3 class="product-name">${produto.nome}</h3>
                                    <p class="product-description">${produto.descricao}</p>
                                    <div class="product-footer">
                                        <span class="product-price">R$ ${produto.preco.toFixed(2)}</span>
                                        <button class="btn-add-to-cart" onclick="adicionarAoCarrinho(${produto.id})">
                                            <span>🛒</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    console.log("✅ RENDERIZAÇÃO COMPLETA! " + categorias.length + " categorias renderizadas");
    console.log("✅ Total de produtos: " + categorias.reduce((acc, cat) => acc + cat.produtos.length, 0));
}

// ============================================
// FUNÇÕES DO CARRINHO
// ============================================

function encontrarProduto(produtoId) {
    for (let categoria of categorias) {
        const produto = categoria.produtos.find(p => p.id === produtoId);
        if (produto) return produto;
    }
    return null;
}

function adicionarAoCarrinho(produtoId) {
    const produto = encontrarProduto(produtoId);
    if (!produto) {
        console.error(`Produto ${produtoId} não encontrado`);
        return;
    }

    const itemCarrinho = carrinho.find(item => item.id === produtoId);

    if (itemCarrinho) {
        itemCarrinho.quantidade++;
    } else {
        carrinho.push({
            ...produto,
            quantidade: 1
        });
    }

    salvarCarrinho();
    atualizarCarrinho();
    console.log("✅ Produto adicionado ao carrinho:", produto.nome);
}

function removerDoCarrinho(produtoId) {
    carrinho = carrinho.filter(item => item.id !== produtoId);
    salvarCarrinho();
    atualizarCarrinho();
}

function atualizarQuantidade(produtoId, novaQuantidade) {
    const item = carrinho.find(i => i.id === produtoId);
    if (item) {
        if (novaQuantidade <= 0) {
            removerDoCarrinho(produtoId);
        } else {
            item.quantidade = novaQuantidade;
            salvarCarrinho();
            atualizarCarrinho();
        }
    }
}

function salvarCarrinho() {
    try {
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
    } catch (e) {
        console.error("Erro ao salvar carrinho:", e);
    }
}

function atualizarCarrinho() {
    const cartCountBadge = document.getElementById('cart-count');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalSpan = document.getElementById('cart-total');

    const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
    
    if (cartCountBadge) {
        cartCountBadge.textContent = totalItens;
    }

    if (carrinho.length === 0) {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '<p class="text-gray-500 text-center py-8">Carrinho vazio</p>';
        }
        if (cartTotalSpan) {
            cartTotalSpan.textContent = 'R$ 0,00';
        }
    } else {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = carrinho.map(item => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.nome}</div>
                        <div class="cart-item-price">R$ ${(item.preco * item.quantidade).toFixed(2)}</div>
                    </div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="atualizarQuantidade(${item.id}, ${item.quantidade - 1})">−</button>
                        <span class="font-bold w-8 text-center">${item.quantidade}</span>
                        <button class="qty-btn" onclick="atualizarQuantidade(${item.id}, ${item.quantidade + 1})">+</button>
                    </div>
                    <button class="remove-btn" onclick="removerDoCarrinho(${item.id})">Remover</button>
                </div>
            `).join('');
        }

        const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        if (cartTotalSpan) {
            cartTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
        }
    }
}

function fazerPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }

    let mensagem = '🍫 *Olá! Gostaria de fazer um pedido na Pam Cakes & Dôces*\n\n';
    mensagem += '*Itens do Pedido:*\n';
    
    carrinho.forEach(item => {
        mensagem += `• ${item.quantidade}x ${item.nome} - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    const total = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    mensagem += `\n*Total: R$ ${total.toFixed(2)}*\n\n`;
    mensagem += 'Aguardando confirmação! 😊';

    const numeroWhatsApp = '5517997839368'; // MUDE PARA SEU NÚMERO!
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(urlWhatsApp, '_blank');

    carrinho = [];
    salvarCarrinho();
    atualizarCarrinho();
    fecharCarrinho();
}

function abrirCarrinho() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function fecharCarrinho() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    const cartBtn = document.getElementById('cart-btn');
    const closeCartBtn = document.getElementById('close-cart');
    const cartModal = document.getElementById('cart-modal');
    const checkoutBtn = document.getElementById('checkout-btn');

    if (cartBtn) cartBtn.addEventListener('click', abrirCarrinho);
    if (closeCartBtn) closeCartBtn.addEventListener('click', fecharCarrinho);
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) fecharCarrinho();
        });
    }
    if (checkoutBtn) checkoutBtn.addEventListener('click', fazerPedido);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// INICIALIZAÇÃO - GARANTIDA!
// ============================================

console.log("📄 Script carregado!");

// Aguardar DOM estar pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log("✅ DOM pronto!");
        renderizarCategorias();
        setupEventListeners();
        atualizarCarrinho();
    });
} else {
    console.log("✅ DOM já estava pronto!");
    renderizarCategorias();
    setupEventListeners();
    atualizarCarrinho();
}

// Também renderizar após um pequeno delay (segurança extra)
setTimeout(() => {
    console.log("⏰ Verificação após 500ms...");
    const container = document.getElementById('categorias-container');
    if (container && container.children.length === 0) {
        console.log("⚠️ Container vazio! Tentando novamente...");
        renderizarCategorias();
    }
}, 500);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharCarrinho();
});

console.log("✅ Script totalmente inicializado!");
