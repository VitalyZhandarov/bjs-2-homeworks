class AlarmClock {
    constructor(alarmCollection, intervalId) {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null || callback === undefined) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
        for (let alarm of this.alarmCollection) {
            if (alarm.time === time) {
                console.warn('Уже присутствует звонок на это же время');
            }
        }
        this.alarmCollection.push({
            callback, 
            time, 
            canCall: true
        });
    }

    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
    }

    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-RU", {
            hour: "2-digit",
            minute: "2-digit"
        });         
    }

    start() {
        if (this.intervalId) {
            return;
        }

        this.intervalId = setInterval (() => {
            const currentTime = this.getCurrentFormattedTime();
            
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === currentTime && alarm.canCall) {
                    alarm.canCall = false;
					alarm.callback();
                }
            });
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(alarm => {
            alarm.canCall = true;
        })
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}