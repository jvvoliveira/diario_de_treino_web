import React, { useState, useEffect, useMemo } from "react";

import { MdNotifications } from "react-icons/md";
import api from "../../services/api";

import { Container, Badge, NotificationList, Scroll, Notification } from "./styles";

const Notifications = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const hasUnread = useMemo(() =>
    Boolean(notifications.find(notification => notification.read === false)),
    [notifications])

  async function handleMarkAllAsRead() {
    notifications.map(async (notification) => {
      await api.put(`notifications/${notification._id}`)
    })

    setNotifications(notifications.map(notification => ({ ...notification, read: true })))
  }

  async function loadNotifications() {
    const response = await api.get('notifications');

    setNotifications(response.data);
  }

  function handleToggleVisible() {
    setVisible(!visible)
    if (hasUnread && visible) {
      handleMarkAllAsRead();
    }
  }

  useEffect(() => {
    loadNotifications();
  }, []);

  return (
    <Container>
      <Badge onClick={handleToggleVisible} hasUnread={hasUnread}>
        <MdNotifications color='#292929' size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
            </Notification>
          ))
          }
        </Scroll>
      </NotificationList>
    </Container>
  );
}

export default Notifications;