
class Fract {
    constructor(numerator, denominator) {
        this.n = numerator;
        this.d = denominator;
    }
}

export function calculateResult({ plus_param, minus_param, start_value, n }, debugOutput) {


    let current_numbers = [start_value];
    let current_probabilities = [new Fract(1, 1)];
    let next_numbers = [];
    let next_probabilities = [];
    let res = [];

    let debug_log = "";


    function iterate() {
        for (let num of current_numbers) {
            if (num > 0) {
                next_numbers.push(num + plus_param);
            }
        }

        next_numbers.push(
            current_numbers[current_numbers.length - 1] > 0
                ? current_numbers[current_numbers.length - 1] - minus_param
                : current_numbers[current_numbers.length - 2] - minus_param
        );

        for (let i = 0; i < current_probabilities.length; i++) {
            if (current_numbers[i] > 0) {
                next_probabilities.push(
                    new Fract(current_probabilities[i].n, current_probabilities[i].d * 2)
                );
            }
        }

        for (let i = 0; i < current_probabilities.length; i++) {
            if (current_numbers[i] <= 0) {
                res.push(current_probabilities[i].n);
                continue;
            }

            try {
                next_probabilities[i + 1].n += current_probabilities[i].n;
            } catch (e) {
                next_probabilities.push(
                    new Fract(current_probabilities[i].n, current_probabilities[i].d * 2)
                );
            }
        }

        if (debugOutput) {
            debug_log += JSON.stringify(next_probabilities) + JSON.stringify(next_numbers);
        }

        current_numbers = next_numbers;
        current_probabilities = next_probabilities;
        next_numbers = [];
        next_probabilities = [];
    }

    while (res.length < n) {
        iterate();
    }

    let prob = 0

    for (let i = 0; i < n; i++) {
        const t = res[i] / (Math.pow(2, Math.ceil((start_value + plus_param*i)/minus_param) + i))
        prob += t
        console.log(t)

    }

    return {res: res, prob: prob};
}
