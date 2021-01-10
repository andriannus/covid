describe('Not Found Page', () => {
  it('should show page when user access path besides `/` or `landing`', () => {
    cy.visit('/404');
    cy.contains('h1', 'Halaman yang kamu cari tidak ditemukan.');
  });

  it('should navigate to landing page when `Kembali ke Beranda` button clicked', () => {
    cy.visit('/404');
    cy.get('#BtnBackToLanding').click();
    cy.url().should('include', '/');
  });
});
