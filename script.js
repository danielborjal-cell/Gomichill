document.addEventListener('DOMContentLoaded',()=>{
    // Ajustes iniciales
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Catalogo con imágenes reales
    const catalog = [
        {id:1,name:'Mango',price:'',desc:'Delicioso mango fresco con gomitas y chamoy',image:'assets/producto1.png'},
        {id:2,name:'Piña',price:'',desc:'Refrescante piña con gomitas y chamoy',image:'assets/producto2.png'},
        {id:4,name:'Gomitas',price:'',desc:'Gomitas frescas y deliciosas con chamoy',image:'assets/gomitas.png'},
        {id:5,name:'Chamoy',price:'',desc:'Nuestro delicioso chamoy artesanal',image:'assets/chamoy.png'}
    ];

    function renderCatalog(){
        const grid = document.getElementById('catalogGrid');
        grid.innerHTML = '';
        catalog.forEach(item=>{
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <div class="item-image"><img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:10px"></div>
                <div class="item-title">${item.name}</div>
                <div class="muted">${item.desc}</div>
                <div style="display:flex;justify-content:space-between;align-items:center;margin-top:.6rem">
                    <button class="btn" onclick="alert('Gracias por tu interés en ${item.name}. Contacta al número o web para pedir.')">Pedir</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    renderCatalog();

    // Renderizar producto destacado (Vaso Gomichill)
    const featured = {name:'Vaso Gomichill',price:'$ 6.000',desc:'Mango y piña recubierto de gomita y chamoy',image:'assets/producto3.png'};
    const featuredDiv = document.getElementById('featuredProduct');
    if(featuredDiv){
        featuredDiv.innerHTML = `
            <div class="featured-product-image"><img src="${featured.image}" alt="${featured.name}"></div>
            <div class="featured-product-info">
                <h3>⭐ ${featured.name}</h3>
                <p class="desc">${featured.desc}</p>
                <div class="price">${featured.price}</div>
                <button class="btn" onclick="alert('Gracias por tu interés en ${featured.name}. Contacta al número o web para pedir.')">Pedir ahora</button>
            </div>
        `;
    }

    // Equipo - datos extraídos del organigrama proporcionado
    const team = [
        {name:'Stif Osorio', role:'Director General', bio:'Lidera la operación y visión estratégica.'},
        {name:'Paula Rativa', role:'Jefa Administrativa', bio:'Responsable de administración y finanzas.'},
        {name:'Caren Suarez', role:'Talento Humano', bio:'Encargada de selección y bienestar del personal.'},
        {name:'Daniel Borja', role:'Marketing y Logística', bio:'Coordina distribución y comunicación.'},
        {name:'Mónica Cumaco', role:'Jefe de Planta', bio:'Supervisa la producción y calidad.'},
        {name:'Diana Lozano', role:'Operaria', bio:'Operaciones en planta.'},
        {name:'Diana Moreno', role:'Operaria', bio:'Operaciones en planta.'},
        {name:'Sara Vargas', role:'Vendedora e Impulsadora', bio:'Ventas y promoción en punto de venta.'},
        {name:'Daniela Barón', role:'Vendedora e Impulsadora', bio:'Ventas y promoción en punto de venta.'}
    ];
    function renderTeam(){
        const grid = document.getElementById('teamGrid');
        if(!grid) return;
        grid.innerHTML = '';
        team.forEach(member=>{
            const card = document.createElement('article');
            card.className = 'team-card';
            // usar DiceBear Avatars con seed por nombre (SVG)
            const seed = encodeURIComponent(member.name.replace(/\s+/g,'_'));
            const avatarUrl = 'https://avatars.dicebear.com/api/avataaars/' + seed + '.svg?background=transparent';

            const avatarWrap = document.createElement('div');
            avatarWrap.className = 'team-avatar';
            const img = document.createElement('img');
            img.alt = `Avatar ${member.name}`;
            img.loading = 'lazy';
            img.style.width = '100%';
            img.style.height = '100%';
            img.style.objectFit = 'cover';
            // provisional src to attempt load
            img.src = avatarUrl;
            // safe fallback on error
            img.onerror = function(){ this.onerror = null; this.src = 'assets/logo.svg'; };
            avatarWrap.appendChild(img);

            // attempt to fetch the SVG and use a blob URL (more reliable in some contexts)
            fetch(avatarUrl).then(res=>{
                if(!res.ok) throw new Error('avatar fetch failed');
                return res.blob();
            }).then(blob=>{
                const obj = URL.createObjectURL(blob);
                img.src = obj;
            }).catch(()=>{
                // keep fallback already set on error handler
            });

            const meta = document.createElement('div');
            meta.className = 'team-meta';
            meta.innerHTML = `
                <div class="team-name">${member.name}</div>
                <div class="team-role">${member.role}</div>
                <div class="team-bio">${member.bio}</div>
            `;

            card.appendChild(avatarWrap);
            card.appendChild(meta);
            grid.appendChild(card);
        });
    }

    renderTeam();

    // Menú móvil toggle
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    if(menuToggle && mainNav){
        menuToggle.addEventListener('click', ()=>{
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
        // Cerrar menú al hacer clic en un enlace
        mainNav.querySelectorAll('a').forEach(link=>{
            link.addEventListener('click',()=>{
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }
});
