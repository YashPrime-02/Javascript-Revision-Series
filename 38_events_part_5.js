// =========================================
// 📘 SELECT INSERT DIV
// =========================================

// This is the container where
// keyboard data will appear

const insert = document.getElementById('insert')


// =========================================
// 📘 KEYDOWN EVENT
// =========================================

// window listens for every key press

window.addEventListener('keydown', (e) => {

    // =========================================
    // 📘 UPDATE HTML DYNAMICALLY
    // =========================================

    insert.innerHTML = `

        <div class="color">

            <table>

                <!-- TABLE HEADING -->
                <tr>

                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>

                </tr>

                <!-- TABLE DATA -->
                <tr>

                    <!-- 
                        If user presses spacebar,
                        show "Space"
                    -->
                    <td>${e.key === ' ' ? 'Space' : e.key}</td>

                    <!-- Numeric key code -->
                    <td>${e.keyCode}</td>

                    <!-- Physical keyboard key -->
                    <td>${e.code}</td>

                </tr>

            </table>

        </div>
    `
})