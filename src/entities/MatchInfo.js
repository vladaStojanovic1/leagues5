

export class MatchInfo {
    constructor(res) {
        this.numOfMatches = res.head2head.numberOfMatches;
        this.totalGoals = res.head2head.totalGoals;
        this.homeTeamName = res.head2head.homeTeam.name;
        this.homeTeamWins = res.head2head.homeTeam.wins;
        this.homeTeamDraws = res.head2head.homeTeam.draws;
        this.homeTeamLosses = res.head2head.homeTeam.losses;
        this.awayTeamName = res.head2head.awayTeam.name;
        this.awayTeamWins = res.head2head.awayTeam.wins;
        this.awayTeamDraws = res.head2head.awayTeam.draws;
        this.awayTeamLosses = res.head2head.awayTeam.losses;
        this.competitionName = res.match.competition.name;
        this.status = res.match.status;
        this.stadium = res.match.venue;
        this.halfTimeScoreHome = res.match.score.halfTime.homeTeam;
        this.halfTimeScoreAway = res.match.score.halfTime.awayTeam;
        this.fullTimeScoreHome = res.match.score.fullTime.homeTeam;
        this.fullTimeScoreAway = res.match.score.fullTime.awayTeam;
        this.referees = res.match.referees;
    }
}