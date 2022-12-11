export class BankAccount {

    name: string
    balance: number
    logs: string[]
    beneficiaries: string[]

    constructor(name: string) {
        this.balance = 0
        this.logs = []
        this.name = name
        this.beneficiaries = []
    }

    addMoney(amount: number) {
        this.balance += amount
        this.logs.push(`+${amount}`)
    }

    withdrawMoney(amount: number) {
        this.balance -= amount
        this.logs.push(`-${amount}`)
    }

    editInfo(newName: string) {
        this.name = newName
        this.logs.push(`Changed name to ${newName}`)
    }

    addBeneficiary(beneficiary: string) {
        this.beneficiaries.push(beneficiary)
        this.logs.push(`Added beneficiary : ${beneficiary}`)
    }

    removeBeneficiary(beneficiary: string) {
        this.beneficiaries = this.beneficiaries.filter(benef => benef !== beneficiary)
        this.logs.push(`Removed beneficiary : ${beneficiary}`)
    }

    transferMoney(receiver: BankAccount, amount: number) {
        this.balance -= amount
        receiver.balance += amount
        this.logs.push(`Transfer of ${amount} sent from ${this.name} to ${receiver.name}`)
    }
}