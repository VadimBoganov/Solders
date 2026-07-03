(async () => {
            await GenerateHeader()
            await GenerateFooter()
        })()

        document.getElementById("contactForm").addEventListener("submit", async (e) => {
            e.preventDefault()

            const status = document.getElementById("contactStatus")
            status.textContent = "Отправляем..."
            status.className = "contact__status"

            const payload = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value || null,
                message: document.getElementById("message").value
            }

            try {
                const response = await fetch("/api/contactrequests", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                })

                if (!response.ok) throw new Error("request failed")

                status.textContent = "Заявка отправлена, мы скоро свяжемся с вами"
                status.className = "contact__status contact__status--ok"
                e.target.reset()
            } catch (err) {
                status.textContent = "Не удалось отправить заявку, попробуйте позвонить нам"
                status.className = "contact__status contact__status--err"
            }
        })
