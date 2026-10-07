/* =========================================================
   SWEET DREAMS
   CONFEITARIA ARTESANAL
   ========================================================= */

   document.addEventListener("DOMContentLoaded", () => {

    console.log("Sweet Dreams - Protótipo carregado com sucesso.");

    /* =====================================================
       MENU MOBILE
       ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNavigation = document.getElementById("main-navigation");

    if (menuToggle && mainNavigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen =
                mainNavigation.classList.toggle("is-open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Fechar menu" : "Abrir menu"
            );
        });

        /* Fecha o menu ao clicar em um link */

        const navigationLinks =
            mainNavigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                mainNavigation.classList.remove("is-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );
            });
        });

        /* Fecha o menu ao voltar para a versão desktop */

        window.addEventListener("resize", () => {

            if (window.innerWidth > 768) {

                mainNavigation.classList.remove("is-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );
            }
        });
    }

    /* =====================================================
       TECLA ESC
       ===================================================== */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (mainNavigation && menuToggle) {

                mainNavigation.classList.remove("is-open");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Abrir menu"
                );
            }
        }
    });

    /* =====================================================
       FORMULÁRIO DEMONSTRATIVO
       ===================================================== */

    const budgetForm =
        document.getElementById("budget-form");

    const formStatus =
        document.getElementById("form-status");

    const nameInput =
        document.getElementById("name");

    const productSelect =
        document.getElementById("product");

    const dateInput =
        document.getElementById("date");

    if (budgetForm) {

        budgetForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();

                const name =
                    nameInput.value.trim();

                const product =
                    productSelect.value;

                const date =
                    dateInput.value;

                /* Validação */

                if (!name || !product || !date) {

                    if (formStatus) {

                        formStatus.textContent =
                            "Preencha todos os campos.";

                        formStatus.style.color =
                            "var(--color-primary-dark)";
                    }

                    return;
                }

                /* Converte a data */

                const selectedDate =
                    new Date(`${date}T00:00:00`);

                const formattedDate =
                    selectedDate.toLocaleDateString(
                        "pt-BR"
                    );

                /* Mensagem da simulação */

                if (formStatus) {

                    formStatus.textContent =
                        `Olá, ${name}! Esta é uma demonstração ` +
                        `do atendimento para ${product} ` +
                        `na data de ${formattedDate}. ` +
                        `Nenhum pedido foi realizado.`;

                    formStatus.style.color =
                        "var(--color-primary-dark)";
                }

                /* Limpa o formulário */

                budgetForm.reset();
            }
        );
    }

});