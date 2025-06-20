import React, { useEffect, useState } from "react";
import {
  EditPageList,
  PutPageList,
  PostgPageList,
} from "../Server/ServiceComp";
import { Button, Col, Row, Form } from "react-bootstrap";

function TeachForm({ mode, id, Fetchdata }) {
  const [form, setForm] = useState({
    teacher_name: "",
    teacher_email: "",
    teacher_phno: "",
    teacher_gender: "",
    teacher_department: "",
    teacher_joiningdate: "",
    teacher_status: "",
    teacher_salary: "",
    teacher_address: "",
    teacher_id: "",
  });

  const Edit = async (id) => {
    const data = await EditPageList(id);
    setForm(data);
  };

  useEffect(() => {
    if (mode === "edit") {
      Edit(id);
    } else {
      setForm({
        teacher_name: "",
        teacher_email: "",
        teacher_phno: "",
        teacher_gender: "",
        teacher_department: "",
        teacher_joiningdate: "",
        teacher_status: "",
        teacher_salary: "",
        teacher_address: "",
        teacher_id: "",
      });
    }
  }, [id, mode]);

  const handlesub = async (e) => {
    e.preventDefault();
    if (mode === "edit") {
      await PutPageList(form);
      Fetchdata();
      setForm("");
    } else {
      await PostgPageList(form);
      Fetchdata();
    }
  };

  return (
    <Form onSubmit={handlesub}>
      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Teacher Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={form.teacher_name}
            onChange={(e) => setForm({ ...form, teacher_name: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={form.teacher_email}
            onChange={(e) =>
              setForm({ ...form, teacher_email: e.target.value })
            }
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter phone"
            value={form.teacher_phno}
            onChange={(e) => setForm({ ...form, teacher_phno: e.target.value })}
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Gender</Form.Label>
          <Form.Select
            value={form.teacher_gender}
            onChange={(e) =>
              setForm({ ...form, teacher_gender: e.target.value })
            }
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Department</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter department"
            value={form.teacher_department}
            onChange={(e) =>
              setForm({ ...form, teacher_department: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Joining Date</Form.Label>
          <Form.Control
            type="date"
            value={form.teacher_joiningdate}
            onChange={(e) =>
              setForm({ ...form, teacher_joiningdate: e.target.value })
            }
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={form.teacher_status}
            onChange={(e) =>
              setForm({ ...form, teacher_status: e.target.value })
            }
          >
            <option value="">Select status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} md="6">
          <Form.Label>Salary</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter salary"
            value={form.teacher_salary}
            onChange={(e) =>
              setForm({ ...form, teacher_salary: e.target.value })
            }
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="8">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={form.teacher_address}
            onChange={(e) =>
              setForm({ ...form, teacher_address: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group as={Col} md="4">
          <Form.Label>Teacher ID</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Teacher ID"
            value={form.teacher_id}
            onChange={(e) => setForm({ ...form, teacher_id: e.target.value })}
          />
        </Form.Group>
      </Row>

      <Button type="submit" variant={mode === "edit" ? "warning" : "primary"}>
        {mode === "edit" ? "Update" : "Save"}
      </Button>
    </Form>
  );
}

export default TeachForm;
