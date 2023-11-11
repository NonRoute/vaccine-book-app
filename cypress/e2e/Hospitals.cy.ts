describe('template spec', () => {
	it('passes', () => {
		cy.visit('/')
		cy.get('video').should('exist')
		cy.get('video').should('have.prop', 'paused', false)
		cy.wait(5000)
		cy.get('video').then(($video) => {
			$video.trigger('pause')
		})
		cy.get('video').should('have.prop', 'paused', true)
		cy.contains('button', 'Select Hospital NOW').click()
		cy.wait(5000)
		cy.get('main > div').find('a img').should('have.length.greaterThan', 3)
	})
})
