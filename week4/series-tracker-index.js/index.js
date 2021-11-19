import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    //adds serie to the series array. and then updates lastSerie, currentSerie, nextSerie, numberOfWatched and numberOfUnwatched accordingly
    this.series.push(serie);
    if (serie.isWatched) {
      this.numberOfWatched += 1;
      if (!this.lastSerie) {
        this.lastSerie = serie;
      } else {
        if (this.lastSerie.finishedDate < serie.finishedDate) {
          this.lastSerie = serie;
        }
      }
    } else {
      this.numberOfUnWatched += 1;
      if (serie.isCurrent) {
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
      } else if (!this.nextSerie) {
        this.nextSerie = serie;
      }
    }
  };

  //starts the system by adding the series if we have them
  if (series.length > 0) {
    series.forEach((serie) => {
      this.add(serie);
    });
  }

  this.finishSerie = function () {
    //first it loops through the array to update array values. it updates our current serie, and our next serie.
    //after the loop it updates our this.current.. and this.last.. and this.nextSerie. it finds the next serie by using an another loop.
    //lastly it updates the watched and unwatched counters.
    this.series.forEach((value, index) => {
      if (value === this.currentSerie) {
        value.isWatched = true;
        value.isCurrent = false;
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + "." + mm + "." + yyyy;
        value.finishedDate = today;
      }
      if (value === this.nextSerie) {
        value.isCurrent = true;
      }
    });
    this.lastSerie = this.currentSerie;
    this.currentSerie = this.nextSerie;
    for (let i = 0; i < this.series.length; i++) {
      if (!this.series[i].isCurrent && !this.series[i].isWatched) {
        this.nextSerie = this.series[i];
        break;
      }
    }
    this.numberOfWatched += 1;
    this.numberOfUnWatched -= 1;
  };

  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}
