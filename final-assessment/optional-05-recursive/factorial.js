function factorial(n) {
    if (n <= 1) {
        return 1; 
    }
    return factorial(n - 1) * n; 
}

// Jangan hapus kode di bawah ini!
export default factorial;
