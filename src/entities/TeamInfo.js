

export class TeamInfo {
    constructor(team) {
        this.position = team.position;
        this.name = team.team.name;
        this.image = team.team.crestUrl;
        this.playedGames = team.playedGames
        this.won = team.won
        this.draw = team.draw;
        this.lost = team.lost;
        this.points = team.points;
        this.id = team.team.id;
    }
}