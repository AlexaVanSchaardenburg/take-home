import headlines from '../fixtures/headlines-data.json'
import scienceHeadlines from '../fixtures/science-headlines-data.json'

describe('Home View', () => {
  it('should display articles', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })
    cy.visit('http://localhost:3000/')
    cy.get('.header-img').should('be.visible')
    cy.get('h1').should('have.text', 'Look at headlines in:')
    cy.get('#categories-dropdown').should('be.visible')
    cy.get('.Card').should('have.length', 13)

    cy.get('.Card > .title-and-img > .card-title').first().should('have.text', 'Major Xbox plans leaked in emails made public on Microsoft’s FTC case - NBC News')
    cy.get('.Card > .title-and-img > .card-date').first().should('have.text', '09-19-2023 at 10:10am')
    cy.get('.Card > .card-description').first().should('have.text', 'A huge collection of purported Xbox files related to the Federal Trade Commission’s case against Microsoft have been published online.')

    cy.get('.Card > .title-and-img > .card-title').last().should('have.text', 'Disney to Invest $60 Billion in Theme Parks, Cruises Over Next Decade - The Wall Street Journal')
    cy.get('.Card > .title-and-img > .card-date').last().should('have.text', '09-19-2023 at 7:23am')
    cy.get('.Card > .card-description').last().should('have.text', 'Company says it would expand its parks and cruise line capacities')
  })
  
  it('should display articles by selected category', () => {
    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: headlines
    })

    cy.intercept('GET', 'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=6fd0aa3c07fd4afab7c7258b44ec251e', {
      statusCode: 200,
      body: scienceHeadlines
    }).as('scienceArticles')
    cy.visit('http://localhost:3000/')
    
    cy.get('#categories-dropdown').select('Science')

    cy.wait('@scienceArticles')

    cy.get('.Card').should('have.length', 16)

    cy.get('.Card > .title-and-img > .card-title').first().should('have.text', 'Asteroid that passes nearby could hit Earth in the future, NASA says - ABC News')
    cy.get('.Card > .title-and-img > .card-date').first().should('have.text', '09-20-2023 at 2:33pm')
    cy.get('.Card > .card-description').first().should('have.text', 'There is a 1 in 2,700 chance the Bennu asteroid could hit Earth by 2182.')

    cy.get('.Card > .title-and-img > .card-title').last().should('have.text', 'Supermassive black holes eat faster than expected, models suggest - Space.com')
    cy.get('.Card > .title-and-img > .card-date').last().should('have.text', '09-20-2023 at 8:00am')
    cy.get('.Card > .card-description').last().should('have.text', 'The black holes at the heart of galaxies have an unexpected delivery service that helps them feed over months rather than hundreds of years.')
  })
})