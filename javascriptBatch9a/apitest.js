// apitest.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// what to test??
// How to testcase??

describe('Verify api functionality',()=>{
    it('verify the get api',()=>{
        cy.request({
            method:"GET",
            url:"https://reqres.in/api/users?page=2"

        }).then((response)=>{
            expect(response.status).to.eql(200)
            // duration 
            // body
            // headers
            // status

        })

    })

    it('verify the post request',()=>{
        cy.request({
            method:"POST",
            url:"https://reqres.in/api/users",
            body:{
                name:"morpheus",
                job:"leader"
            }

        }).then((response)=>{
            expect(response.status).to.eqls(201)
        })

    })

    it('verify the put request',()=>{
        cy.request({
            method:"PUT",
            url:"https://reqres.in/api/users/2",
            body:{
                 name: "morpheus",
                 job: "zion resident"
            }
        }).then((response)=>{
            expect(response.status).to.eqls(200)
        })

    })

    it('verify the put request',()=>{
        cy.request({
            method:"DELETE",
            url:"https://reqres.in/api/users/2",
        }).then((response)=>{
            expect(response.status).to.eqls(204)
        })

    })


})
