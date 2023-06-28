class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const candidateNames = new Set();

        for (let i = 0; i < candidates.length; i++) {
            const [name, education, yearsExperience] = candidates[i].split('-');

            const existingCandidate = this.jobCandidates.find(c => c.name === name);
            
            if (existingCandidate) {
                existingCandidate.yearsExperience = Math.max(existingCandidate.yearsExperience, yearsExperience);
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }

            candidateNames.add(name);
        }

        return `You successfully added candidates: ${Array.from(candidateNames).join(', ')}.`;
    }

    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split('-');
        const existingCandidate = this.jobCandidates.find(c => c.name === name);

        if (existingCandidate) {
            if (Number(minimalExperience) > Number(existingCandidate.yearsExperience)) {
                throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
            } else {
                existingCandidate.yearsExperience = 'hired';
            }

            return `Welcome aboard, our newest employee is ${name}.`;
        } else {
            throw new Error(`${name} is not in the candidates list!`);
        }
    }

    salaryBonus(name) {
        const existingCandidate = this.jobCandidates.find(c => c.name === name);

        if (existingCandidate) {
            if (existingCandidate.education === 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
            } else if (existingCandidate.education === 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
            }
        } else {
            throw new Error(`${name} is not in the candidates list !`);
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length > 0) {
            const candidates = [];
            
            for (let i = 0; i < this.jobCandidates.length; i++) {
                const candidate = this.jobCandidates[i];
                candidates.push(`${candidate.name}-${candidate.yearsExperience}`);
            }

            const sortedCandidates = candidates.sort((a, b) => a.localeCompare(b));

            return 'Candidates list:\n'.concat(sortedCandidates.join('\n'));
        } else {
            throw new Error(`Candidate Database is empty!`);
        }
    }
}

let Jobs = new JobOffers("Google", "Strategy Analyst");

console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));


