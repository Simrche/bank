import { BankAccount } from "./bank"

describe('Bank account', () => {

    let bankAccount;

    beforeEach(() => {
        bankAccount = new BankAccount('diego')
    })

    describe('Get function', () => {
        it('I should get my balance', () => {
            expect(bankAccount.balance).toEqual(0)
        })
    
        it('I should get my name', () => {
            expect(bankAccount.name).toEqual('diego')
        })
    
        it('I should get my logs', () => {
            expect(bankAccount.logs).toEqual([])
        })
    })

    describe('Add money to balance', () => {
        it('I should add money to my balance', () => {
            bankAccount.addMoney(1000)
    
            expect(bankAccount.balance).toEqual(1000)
        })
    
        it('I should add money to my balance', () => {
            bankAccount.addMoney(2000)
            
            expect(bankAccount.balance).toEqual(2000)
        })
    
        it('I should add money to my balance', () => {
            bankAccount.addMoney(2000)
            bankAccount.addMoney(1000)
            
            expect(bankAccount.balance).toEqual(3000)
        })
    })

    describe('Withdraw money to balance', () => {
        it('I should withdraw money to my balance', () => {
            bankAccount.withdrawMoney(1000)
    
            expect(bankAccount.balance).toEqual(-1000)
        })
    
        it('I should withdraw money to my balance', () => {
            bankAccount.withdrawMoney(2000)
            bankAccount.withdrawMoney(1000)
    
            expect(bankAccount.balance).toEqual(-3000)
        })
    })

    describe('Add logs', () => {
        it('It should add a log', () => {
            bankAccount.withdrawMoney(10000)
            bankAccount.addMoney(10000)
    
            expect(bankAccount.logs).toEqual(['-10000','+10000'])
        })

        it('It should add a log', () => {
            bankAccount.withdrawMoney(10000)
            bankAccount.withdrawMoney(20000)
            bankAccount.addMoney(10000)
            bankAccount.addMoney(20000)
    
            expect(bankAccount.logs).toEqual(['-10000', "-20000",'+10000','+20000'])
        })

        it('It should add a log for new Name', () => {
            bankAccount.editInfo('Carlo')
            expect(bankAccount.logs).toEqual(['Changed name to Carlo'])
        })

        it('It should transfer money logs',() =>{
            let receiver = new BankAccount('Roberto')
            bankAccount.transferMoney(receiver, 300)
            expect(bankAccount.logs).toEqual(['Transfer of 300 sent from diego to Roberto'])
        })
    })

    describe('Manage beneficiary', () => {
        it('It should add a beneficiary', () => {
            bankAccount.addBeneficiary('Grego Mevelo')
            expect(bankAccount.beneficiaries).toEqual(['Grego Mevelo'])
        })
        
        it('It should remove a beneficiary', () => {
            bankAccount.addBeneficiary('Grego Mevelo')
            bankAccount.addBeneficiary('Pedro Malborro')
            bankAccount.removeBeneficiary('Grego Mevelo')
            expect(bankAccount.beneficiaries).toEqual(['Pedro Malborro'])
        })
    })
    describe('Modify account', () => {
        it('It should edit my name', () => {
            bankAccount.editInfo('Carlo')
            expect(bankAccount.name).toEqual('Carlo')
        })
    })

    describe('Manage money between account', () => {
        it('It should transfer money',() =>{
            let receiver = new BankAccount('Roberto')
            bankAccount.transferMoney(receiver, 300)
            expect(receiver.balance).toEqual(300)
            expect(bankAccount.balance).toEqual(-300)
        })

        it('It should transfer money',() =>{
            let receiver = new BankAccount('Roberto')
            receiver.addMoney(500)
            bankAccount.transferMoney(receiver, 500)
            expect(receiver.balance).toEqual(1000)
            expect(bankAccount.balance).toEqual(-500)
        })
    })
})
