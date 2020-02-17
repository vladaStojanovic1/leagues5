

export class MatchInfo {
    constructor(data) {
        this.numOfMatches = data.head2head.numberOfMatches;
        this.totalGoals = data.head2head.totalGoals;
        this.homeTeamName = data.head2head.homeTeam.name;
        this.homeTeamWins = data.head2head.homeTeam.wins;
        this.homeTeamDraws = data.head2head.homeTeam.draws;
        this.homeTeamLosses = data.head2head.homeTeam.losses;
        this.awayTeamName = data.head2head.awayTeam.name;
        this.awayTeamWins = data.head2head.awayTeam.wins;
        this.awayTeamDraws = data.head2head.awayTeam.draws;
        this.awayTeamLosses = data.head2head.awayTeam.losses;
        this.competitionName = data.match.competition.name;
        this.status = data.match.status;
        this.stadium = data.match.venue;
        this.halfTimeScoreHome = data.match.score.halfTime.homeTeam;
        this.halfTimeScoreAway = data.match.score.halfTime.awayTeam;
        this.fullTimeScoreHome = data.match.score.fullTime.homeTeam;
        this.fullTimeScoreAway = data.match.score.fullTime.awayTeam;
        this.referees = data.match.referees;
    }
}