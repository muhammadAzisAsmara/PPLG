          const filterButtons = document.querySelectorAll('.filter-btn');
          const galleryItems = document.querySelectorAll('.gallery-item');

          filterButtons.forEach(button => {
              button.addEventListener('click', () => {
                  // Update active button
                  filterButtons.forEach(btn => btn.classList.remove('active'));
                  button.classList.add('active');

                  const filterValue = button.getAttribute('data-filter');

                  galleryItems.forEach(item => {
                      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                          item.style.display = 'block';
                          setTimeout(() => {
                              item.style.opacity = '1';
                              item.style.transform = 'scale(1)';
                          }, 10);
                      } else {
                          item.style.opacity = '0';
                          item.style.transform = 'scale(0.8)';
                          setTimeout(() => {
                              item.style.display = 'none';
                          }, 300);
                      }
                  });
              });
          });

          const modal = document.getElementById('imageModal');
          const modalImage = document.getElementById('modalImage');

          document.querySelectorAll('.gallery-item').forEach(item => {
              item.addEventListener('click', () => {
                  const img = item.querySelector('img');
                  modalImage.src = img.src;
                  modalImage.alt = img.alt;
                  modal.style.display = 'block';
                  document.body.style.overflow = 'hidden';
              });
          });

          function closeModal() {
              modal.style.display = 'none';
              document.body.style.overflow = 'auto';
          }

          modal.addEventListener('click', (e) => {
              if (e.target === modal) {
                  closeModal();
              }
          });

          document.addEventListener('keydown', (e) => {
              if (e.key === 'Escape') {
                  closeModal();
              }
          });

          function loadMoreImages() {
              const grid = document.getElementById('galleryGrid');
              const newImages = [
                  {
                      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                      title: 'Presentasi Project',
                      description: 'Siswa mempresentasikan hasil karya mereka',
                      category: 'kegiatan'
                  },
                  {
                      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                      title: 'Mobile App Development',
                      description: 'Pengembangan aplikasi mobile Android/iOS',
                      category: 'project'
                  },
                  {
                      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
                      title: 'Tim Programming',
                      description: 'Kerja sama tim dalam mengembangkan software',
                      category: 'kegiatan'
                  }
              ];

              newImages.forEach((imageData, index) => {
                  setTimeout(() => {
                      const newItem = document.createElement('div');
                      newItem.className = 'gallery-item loading';
                      newItem.setAttribute('data-category', imageData.category);
                      
                      setTimeout(() => {
                          newItem.innerHTML = `
                              <img src="${imageData.src}" alt="${imageData.title}">
                              <div class="item-overlay">
                                  <h3 class="item-title">${imageData.title}</h3>
                                  <p class="item-description">${imageData.description}</p>
                              </div>
                          `;
                          newItem.classList.remove('loading');
                          
                          // Add click event for modal
                          newItem.addEventListener('click', () => {
                              const img = newItem.querySelector('img');
                              modalImage.src = img.src;
                              modalImage.alt = img.alt;
                              modal.style.display = 'block';
                              document.body.style.overflow = 'hidden';
                          });
                      }, 1000);
                      
                      grid.appendChild(newItem);
                  }, index * 200);
              });
          }

          window.addEventListener('load', () => {
              const galleryItems = document.querySelectorAll('.gallery-item');
              galleryItems.forEach((item, index) => {
                  item.style.opacity = '0';
                  item.style.transform = 'translateY(30px)';
                  
                  setTimeout(() => {
                      item.style.transition = 'all 0.6s ease';
                      item.style.opacity = '1';
                      item.style.transform = 'translateY(0)';
                  }, index * 100);
              });
          });