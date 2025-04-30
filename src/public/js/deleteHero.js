async function eliminarSuperheroe(id) {
    console.log("deleteHero.js cargado correctamente");

    if (confirm("¿Estás seguro de que deseas eliminar este superhéroe?")) {
        try {
            const response = await fetch(`/api/heroes/eliminar/id/${id}`, { method: "DELETE" });

            /* console.log("Response status:", response.status);  // Verificar el código de estado
            console.log("Response OK:", response.ok);  // Verificar si la respuesta es "ok"
            
            // Imprimir el cuerpo de la respuesta para depurar
            const responseBody = await response.json();
            console.log("Response body:", responseBody); */

            if (response.ok) {
                /* const data = await response.json(); // 👈 Leer el body
                alert(data.successMessage);         // 👈 Mostrar el mensaje que viene del server */
                /* alert('¡Superhéroe eliminado exitosamente!'); // Usar si mando solo un estado como respuesta */
                window.location.href = "/api/heroes/dashboard"; // Redirigir después de eliminar
            } else {
                alert("Error al eliminar el superhéroe");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }
}
