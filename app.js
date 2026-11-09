function showTime() {
    const now = new Date();

    document.getElementById("result").textContent =
        now.toLocaleString();
}