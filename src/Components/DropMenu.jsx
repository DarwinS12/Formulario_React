import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Drawer, Space } from "antd";

const DropMenu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <button type="primary" className="btn-open" onClick={showDrawer}>
          Acciones
        </button>
      </Space>
      <Drawer
        title="Acciones"
        placement={"right"}
        width={200}
        style={{ backgroundColor: "rgb(56, 56, 56)" }}
        onClose={onClose}
        open={open}
      >
        <p className="p-link">
          <Link className="drop-Link" to="/Obtener">
            Listado
          </Link>
        </p>
        <p className="p-link">
          <Link className="drop-Link" to="/Agregar">
            Agregar
          </Link>
        </p>
        <p className="p-link">
          <Link className="drop-Link" to="/Soporte">
            Soporte
          </Link>
        </p>
      </Drawer>
    </>
  );
};

export default DropMenu;
