// Draw Hollow Box
function hollowBox(n) {
    // menampilkan output
    for (let i=0; i<=n; i++) {
        if (i === 0 || i === n) {
            console.log(output(i))
        }
        else {
            console.log(output(i))
        }
    }
    
    function output(i) {
        arr = [];
        if (i === 0 || i === n) {
            for (let i=0; i<=n; i++) {
                arr.push('*')
            }
        } 
        else {
            for (let i=0; i<=n; i++) {
                if (i == 0 || i == n) {
                    arr.push('*')
                }
                else {
                    arr.push(' ')
                }
            }
        }
        return arr.join('')
    }
}

hollowBox(5)