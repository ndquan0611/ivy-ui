<?php
    include "header.php";
    include "slider.php";
    include "class/category_class.php"
?>

<?php
    $category = new category;
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $category_name = $_POST['category_name'];
        $insert_category = $category -> insert_category($category_name);
    }
?>

<div class="admin-content-right">
                <div class="admin-content-right-category__add">
                    <h1>Them danh muc</h1>
                    <form action="" method="POST">
                        <input require type="text" name="category_name" placeholder="Nhap ten danh muc"  />
                        <button type="submit">Them</button>
                    </form>
                </div>
            </div>
        </section>
    </body>
</html>
