document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.portfolio-page');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    //const filterSelect = document.getElementById('languageFilter');
    const paginationContainer = document.querySelector('.inline-pagination');
    let currentPage = parseInt(localStorage.getItem('portfolioPage')) || 0;
    const isMobile = window.innerWidth <= 768;

   
     
    function updatePage(idx) {
      pages.forEach((p, i) => {
        p.classList.toggle('active', i === idx);
        p.style.display = i === idx ? 'block' : 'none';
      });
      prevBtn.disabled = idx === 0;
      nextBtn.disabled = idx === pages.length - 1;
      prevBtn.classList.toggle('disabled', prevBtn.disabled);
      nextBtn.classList.toggle('disabled', nextBtn.disabled);
      localStorage.setItem('portfolioPage', idx);
      applyFilter();
    }
  
    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) updatePage(--currentPage);
      
      
    });
  
    nextBtn.addEventListener('click', () => {
      if (currentPage < pages.length - 1) updatePage(++currentPage);
      // if (isMobile) {
      //   window.scrollTo({ top: 0, behavior: 'smooth' });
      // }
    });
  /*
    filterSelect.addEventListener('change', applyFilter);
  
    function applyFilter() {
      const filter = filterSelect.value;
      const isFiltering = filter !== 'all';
      paginationContainer.style.display = isFiltering ? 'none' : 'flex';
  
      pages.forEach((page, index) => {
        const tiles = page.querySelectorAll('.tile');
  
        tiles.forEach(tile => {
          const lang = tile.getAttribute('data-lang');
          const shouldShow = filter === 'all' || filter === lang;
  
          tile.style.display = shouldShow ? 'flex' : 'none';
  
          // If showing, ensure tile-1 and remove tile-2/tile-3/full-width
          if (shouldShow) {
            tile.classList.remove('tile-2', 'tile-3', 'full-width');
            tile.classList.add('tile-1');
          }
        });
  
        // Only show the filtered page if it's active or filter is "all"
        if (index === currentPage || !isFiltering) {
          page.style.display = 'block';
        } else {
          page.style.display = 'none';
        }
      });
    }
    */
    updatePage(currentPage);
  });

  function scrollToSection(id) {
    if (id === "overview") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }