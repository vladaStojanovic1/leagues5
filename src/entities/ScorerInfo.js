

export class ScorerInfo {
    constructor(scorer) {
        this.name = scorer.player.name;
        this.team = scorer.team.name;
        this.numberOfGoals = scorer.numberOfGoals;
    }
}