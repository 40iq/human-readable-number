module.exports = function toReadable(number) {
    let result = '';
    switch (number) {
        case 0 :
            result = 'zero';
            return result;
        case 1 :
            result = 'one';
            return result;
        case 2 :
            result = 'two';
            return result;
        case 3 :
            result = 'three';
            return result;
        case 4 :
            result = 'four';
            return result;
        case 5 :
            result = 'five';
            return result;
        case 6 :
            result = 'six';
            return result;
        case 7 :
            result = 'seven';
            return result;
        case 8 :
            result = 'eight';
            return result;
        case 9 :
            result = 'nine';
            return result;
        case 10 :
            result = 'ten';
            return result;
        case 11 :
            result = 'eleven';
            return result;
        case 12 :
            result = 'twelve';
            return result;
        case 13 :
            result = 'thirteen';
            return result;
        case 14 :
            result = 'fourteen';
            return result;
        case 15 :
            result = 'fifteen';
            return result;
        case 16 :
            result = 'sixteen';
            return result;
        case 17 :
            result = 'seventeen';
            return result;
        case 18 :
            result = 'eighteen';
            return result;
        case 19 :
            result = 'nineteen';
            return result;
        case 20 :
            result = 'twenty';
            return result;
        case 30 :
            result = 'thirty';
            return result;
        case 40 :
            result = 'forty';
            return result;
        case 50 :
            result = 'fifty';
            return result;
        case 60 :
            result = 'sixty';
            return result;
        case 70 :
            result = 'seventy';
            return result;
        case 80 :
            result = 'eighty';
            return result;
        case 90 :
            result = 'ninety';
            return result;
    }

    if (number < 100 && number > 20 ) {
        let secondDigit = (number % 10)
        let firstDigit = number - (number % 10);
        if (secondDigit !== 0) {
            switch (firstDigit) {
                case 20 :
                    result = 'twenty';
                    break;
                case 30 :
                    result = 'thirty';
                    break;
                case 40 :
                    result = 'forty';
                    break;
                case 50 :
                    result = 'fifty';
                    break;
                case 60 :
                    result = 'sixty';
                    break;
                case 70 :
                    result = 'seventy';
                    break;
                case 80 :
                    result = 'eighty';
                    break;
                case 90 :
                    result = 'ninety';
                    break;
            }
            switch (secondDigit) {
                case 1 :
                    result += ' one';
                    break;
                case 2 :
                    result += ' two';
                    break;
                case 3 :
                    result += ' three';
                    break;
                case 4 :
                    result += ' four';
                    break;
                case 5 :
                    result += ' five';
                    break;
                case 6 :
                    result += ' six';
                    break;
                case 7 :
                    result += ' seven';
                    break;
                case 8 :
                    result += ' eight';
                    break;
                case 9 :
                    result += ' nine';
                    break;
            }
        }
        return result;
    }

    if (number < 1000 && number > 99) {
        switch (number) {
        case 100 :
            result = 'one hundred';
            return result;
        case 200 :
            result = 'two hundred';
            return result;
        case 300 :
            result = 'three hundred';
            return result;
        case 400 :
            result = 'four hundred';
            return result;
        case 500 :
            result = 'five hundred';
            return result;
        case 600 :
            result = 'six hundred';
            return result;
        case 700 :
            result = 'seven hundred';
            return result;
        case 800 :
            result = 'eight hundred';
            return result;
        case 900 :
            result = 'nine hundred';
            return result;
        }

        switch (Math.floor(number / 100)) {
        case 1 :
            result = 'one hundred';
            break;
        case 2 :
            result = 'two hundred';
            break;
        case 3 :
            result = 'three hundred';
            break;
        case 4 :
            result = 'four hundred';
            break;
        case 5 :
            result = 'five hundred';
            break;
        case 6 :
            result = 'six hundred';
            break;
        case 7 :
            result = 'seven hundred';
            break;
        case 8 :
            result = 'eight hundred';
            break;
        case 9 :
            result = 'nine hundred';
            break;
        }
        if ((number % 100) > 20) {
            let secondDigit = (number % 10);
            let firstDigit = (number % 100 - number % 10) ;
            if (secondDigit !== 0) {
                switch (firstDigit) {
                    case 20 :
                        result += ' twenty';
                        break;
                    case 30 :
                        result += ' thirty';
                        break;
                    case 40 :
                        result += ' forty';
                        break;
                    case 50 :
                        result += ' fifty';
                        break;
                    case 60 :
                        result += ' sixty';
                        break;
                    case 70 :
                        result += ' seventy';
                        break;
                    case 80 :
                        result += ' eighty';
                        break;
                    case 90 :
                        result += ' ninety';
                        break;
                }
                switch (secondDigit) {
                    case 1 :
                        result += ' one';
                        break;
                    case 2 :
                        result += ' two';
                        break;
                    case 3 :
                        result += ' three';
                        break;
                    case 4 :
                        result += ' four';
                        break;
                    case 5 :
                        result += ' five';
                        break;
                    case 6 :
                        result += ' six';
                        break;
                    case 7 :
                        result += ' seven';
                        break;
                    case 8 :
                        result += ' eight';
                        break;
                    case 9 :
                        result += ' nine';
                        break;
                }
            } else {
                switch (number % 100) {
                    case 20 :
                        result += ' ten';
                        break;
                    case 20 :
                        result += ' twenty';
                        break;
                    case 30 :
                        result += ' thirty';
                        break;
                    case 40 :
                        result += ' forty';
                        break;
                    case 50 :
                        result += ' fifty';
                        break;
                    case 60 :
                        result += ' sixty';
                        break;
                    case 70 :
                        result += ' seventy';
                        break;
                    case 80 :
                        result += ' eighty';
                        break;
                    case 90 :
                        result += ' ninety';
                        break;

                }
            }
            return result;
        } else {
        switch (number % 100) {
            case 1 :
                result += ' one';
                return result;
            case 2 :
                result += ' two';
                return result;
            case 3 :
                result += ' three';
                return result;
            case 4 :
                result += ' four';
                return result;
            case 5 :
                result += ' five';
                return result;
            case 6 :
                result += ' six';
                return result;
            case 7 :
                result += ' seven';
                return result;
            case 8 :
                result += ' eight';
                return result;
            case 9 :
                result += ' nine';
                return result;
            case 10 :
                result += ' ten';
                return result;
            case 11 :
                result += ' eleven';
                return result;
            case 12 :
                result += ' twelve';
                return result;
            case 13 :
                result += ' thirteen';
                return result;
            case 14 :
                result += ' fourteen';
                return result;
            case 15 :
                result += ' fifteen';
                return result;
            case 16 :
                result += ' sixteen';
                return result;
            case 17 :
                result += ' seventeen';
                return result;
            case 18 :
                result += ' eighteen';
                return result;
            case 19 :
                result += ' nineteen';
                return result;
            case 20 :
                result += ' twenty';
                return result;
        }
    }
    }
}
