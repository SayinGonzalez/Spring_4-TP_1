async function eliminarSuperheroe(id) {
    console.log("deleteHero.js cargado correctamente");

    if (confirm("¿Estás seguro de que deseas eliminar este superhéroe?")) {
        try {
            const response = await fetch(`/api/heroes/eliminar/id/${id}`, { method: "DELETE" });
            
            if (response.ok) {
                alert("Superhéroe eliminado con éxito");
                window.location.href = "/api/heroes/lista"; // Redirigir después de eliminar
            } else {
                alert("Error al eliminar el superhéroe");
            }

        } catch (error) {
            console.error("Error:", error);
        }
    }
}
